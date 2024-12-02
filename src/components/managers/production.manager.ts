import Card from '../models/card';
import Cost from '../models/cost';
import FieldSpot from '../models/field-spot';
import GameField from '../models/game-field';
import { ResourceType } from '../models/resource.type';
import { RoundStageType } from '../models/round-stage.type';
import Spot from '../models/spot';
import CardManager from './card.manager';
import { getNeighborsInRange } from './field.manager';

export default class ProductionManager {
   constructor(private cardManager: CardManager) {}

   public getStartBank(): Cost[] {
      return [
         { resource: ResourceType.Food, count: 10, important: true },
         { resource: ResourceType.Weapon, count: 25, important: true },
         { resource: ResourceType.Water, count: 5 },
         { resource: ResourceType.Wood, count: 0 },
         { resource: ResourceType.Stone, count: 0 },
         { resource: ResourceType.Leather, count: 0 },
         { resource: ResourceType.Iron, count: 0 },
         { resource: ResourceType.Armor, count: 0 },
         { resource: ResourceType.Books, count: 0 },
         { resource: ResourceType.Gems, count: 0 },
      ];
   }

   public produceByDice(bank: Cost[], field: GameField, number: number) {
      field.spots.forEach((spot) => {
         if (!spot.resourceType) return;
         const card = this.cardManager.findCardByResource(spot.resourceType);
         if (card?.num !== number) return;
         this.produce(bank, field, spot, card);
      });
   }

   public produceByTime(bank: Cost[], field: GameField, time: RoundStageType) {
      field.spots.forEach((spot) => {
         if (!spot.resourceType) return;
         const card = this.cardManager.findCardByResource(spot.resourceType);
         if (card?.passive !== time) return;
         this.produce(bank, field, spot, card);
      });
   }

   private produce(bank: Cost[], field: GameField, spot: FieldSpot, card: Card) {
      if (card.consumes) {
         const canConsume = card.consumes.every((x) => {
            const value = this.getBankValue(bank, x.resource);
            return value && value.count >= x.count;
         });
         if (!canConsume) return;
         card.consumes.every((x) => this.addToBank(bank, x.resource, -1 * x.count));
      }
      const income = this.calculateIncome(field, spot, card);
      spot.animations.gain = income.count;
      this.addToBank(bank, income.resource, income.count);
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

   private addToBank(bank: Cost[], resource: ResourceType, count: number) {
      if (count === 0) return;
      const el = this.getBankValue(bank, resource);
      if (!el) {
         bank.push({ resource, count });
         return;
      }
      el.count += count;
   }

   private getBankValue(bank: Cost[], resource: ResourceType) {
      return bank.find((x) => x.resource === resource);
   }
}
