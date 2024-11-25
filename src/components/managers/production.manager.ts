import Card from '../models/card';
import Cost from '../models/cost';
import FieldSpot from '../models/field-spot';
import GameField from '../models/game-field';
import { ResourceType } from '../models/resource.type';
import Spot from '../models/spot';
import CardManager from './card.manager';
import { getNeighborsInRange } from './field.manager';

export default class ProductionManager {
   constructor(private cardManager: CardManager) {}

   public getStartBank(): Cost[] {
      return [
         { resource: ResourceType.Food, count: 20 },
         { resource: ResourceType.Water, count: 5 },
         { resource: ResourceType.Wood1, count: 0 },
         { resource: ResourceType.Stone, count: 0 },
         { resource: ResourceType.Leather, count: 0 },
         { resource: ResourceType.Iron, count: 0 },
         { resource: ResourceType.Weapon, count: 5 },
         { resource: ResourceType.Armor, count: 0 },
         { resource: ResourceType.Books, count: 0 },
         { resource: ResourceType.Gems, count: 0 },
      ];
   }

   public produce(bank: Cost[], field: GameField, number: number) {
      field.spots.forEach((spot) => {
         if (!spot.resourceType) return;
         const card = this.cardManager.findCardByResource(spot.resourceType);
         if (card?.num !== number) return;
         const income = this.calculateIncome(field, spot, card);
         spot.animations.gain = income.count;
         this.addToBank(bank, income);
      });
   }

   private calculateIncome(field: GameField, spot: FieldSpot, card: Card): Cost {
      const resource = card.converts!;
      let count = card.power ?? 0;
      card.aoe?.forEach((aoe) => {
         const positions = getNeighborsInRange(aoe.range!, spot.id, field.width, field.height);
         const matches = positions.map((x) => field.spots[x].resourceType).filter((x) => x === aoe.resource);
         count += matches.length * aoe.power!;
      });
      return { resource, count };
   }

   private addToBank(bank: Cost[], add: Cost) {
      if (add.count === 0) return;
      const el = bank.find((x) => x.resource === add.resource);
      if (!el) throw 'Not set default for ' + add.resource;
      el.count += add.count;
   }
}
