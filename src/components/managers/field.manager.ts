import { BiomType } from '../enums/biom.type';
import GameField from '../models/game-field';
import FieldSpot from '../models/field-spot';
import { SpotType } from '../enums/spot.type';
import Cost from '../models/cost';
import { ResourceType } from '../enums/resource.type';
import Spot from '../models/spot';

export default class FieldManager {
   public setField(field: GameField, width: number, height: number, spots: FieldSpot[]) {
      field.width = width;
      field.height = height;
      field.spots = spots;
      this.formatField(field);
      this.setMatches(field, null);
      this.clearAnimations(field);
      this.recalculateSpotsToFeed(field);
   }

   private formatField(field: GameField) {
      field.spots.forEach((spot, i) => {
         const row = Math.floor(i / field.width);
         spot.evenRow = row % 2 == 1;
         const col = i % field.width;
         const left = spot.evenRow ? -1 : 0;
         const right = field.width - 0;
         spot.id = i;
         spot.available = col > left && col < right;
      });
   }

   public clearAnimations(field: GameField) {
      field.spots.forEach((spot) => {
         spot.animations = {};
         spot.animations.gain = 0;
      });
   }

   public setMatches(field: GameField, spot: Spot | null) {
      field.spots.forEach((x) => {
         x.mismatch = !!spot && (!this.checkMatch(x, spot) || !this.hasNeighboor(field, x.id, true));
      });
   }

   public checkMatch(oldSpot: Spot, newSpot: Spot) {
      return this.checkMatchType(oldSpot.spotType, oldSpot.biomType, newSpot.spotType, newSpot.biomType);
   }

   private checkMatchType(oldSpot: SpotType, oldBiom: BiomType, newSpot: SpotType, newBiom: BiomType) {
      const isEmpty = oldSpot <= SpotType.Hills;
      const sameBiom = oldBiom === newBiom;

      if (newSpot === SpotType.Rift) return oldSpot >= SpotType.Tower;
      if (newSpot === SpotType.Cave) return oldSpot === SpotType.Mountain && sameBiom;
      if (newSpot === SpotType.Fort) return isEmpty && sameBiom;
      if (newSpot === SpotType.Tower) return isEmpty && sameBiom;
      if (newSpot === SpotType.Village1) return isEmpty && sameBiom;
      if (newSpot === SpotType.Farm) return isEmpty && sameBiom;
      if (newSpot === SpotType.Well) return isEmpty && sameBiom;
      if (newSpot === SpotType.Fishing) return isEmpty && sameBiom;
      if (newSpot === SpotType.Woodman) return oldSpot === SpotType.Trees && sameBiom;
      if (newBiom === BiomType.Grass) return oldBiom === BiomType.Sand;
      return false;
   }

   private hasNeighboor(field: GameField, pos: number, inclideItself = false) {
      const neighboorSpots = this.getNeighborsSpots(field, pos, inclideItself).map((x) => x.spotType);
      return neighboorSpots.some((x) => x >= SpotType.Tower);
   }

   private getNeighborsSpots(field: GameField, pos: number, inclideItself = false) {
      const neighboors = getNeighborsInRange(1, pos, field.width, field.height);
      if (inclideItself) neighboors.push(pos);
      return neighboors.map((x) => field.spots[x]);
   }

   public performConsume(resource: ResourceType, field: GameField, bank: Cost[]) {
      const spotsToFeed = field.spots.filter((x) => x.resourceType);
      const losses = this.payAndCountLosses(resource, spotsToFeed.length, bank);
      for (let i = 0; i < losses; i++) {
         const loss = Math.floor(Math.random() * spotsToFeed.length);
         this.destroy(spotsToFeed[loss]);
         spotsToFeed[loss].animations.destroyed = true;
         spotsToFeed[loss] = spotsToFeed[spotsToFeed.length - 1];
         spotsToFeed.pop();
      }
   }

   public recalculateSpotsToFeed(field: GameField) {
      field.spotsToFeed = field.spots.filter((x) => x.resourceType).length;
   }

   public isGameOver(field: GameField) {
      return field.spots.filter((x) => x.resourceType).length === 0;
   }

   private payAndCountLosses(resource: ResourceType, spotsCount: number, bank: Cost[]) {
      const costModel = bank.find((x) => x.resource === resource)!;
      const losses = Math.max(0, spotsCount - costModel.count);
      costModel.count -= Math.min(spotsCount, costModel.count);
      return losses;
   }

   public destroy(spot: FieldSpot) {
      spot.resourceType = undefined;
      if (spot.spotType === SpotType.Cave) spot.spotType = SpotType.Mountain;
      else if (spot.spotType === SpotType.Woodman) spot.spotType = SpotType.Trees;
      else spot.spotType = SpotType.Empty;
   }
}

export function getNeighborsInRange(range: number, pos: number, width: number, height: number) {
   const result: boolean[] = [];
   let lastToProcess = [pos];

   for (let i = 0; i < range; i++) {
      const newFound = [];

      while (lastToProcess.length > 0) {
         const current = lastToProcess.pop()!;
         const neighboors = [-1, +1, -width, +width];
         const odd = Math.floor(current / width) % 2 !== 0;
         if (odd) neighboors.push(-width + 1, width + 1);
         else neighboors.push(-width - 1, width - 1);
         const filtered = neighboors.map((x) => x + current).filter((x) => !result[x] && x >= 0 && x < height * width);
         newFound.push(...filtered);
      }

      lastToProcess = newFound;
      newFound.forEach((x) => (result[x] = true));
   }

   return Object.keys(result).map((x) => +x);
}
