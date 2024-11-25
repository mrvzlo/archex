import { BiomType } from '../models/biom.type';
import GameField from '../models/game-field';
import FieldSpot from '../models/field-spot';
import { SpotType } from '../models/spot.type';

export default class FieldManager {
   public createField(width: number, height: number, spots: FieldSpot[]) {
      const field = { spots, width, height } as GameField;
      this.formatField(field);
      this.setMatches(field, null);
      this.clearAnimations(field);
      return field;
   }

   public formatField(field: GameField) {
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

   public setMatches(field: GameField, spot: FieldSpot | null) {
      field.spots.forEach((x) => {
         x.mismatch = !!spot && (!this.checkMatch(x, spot) || !this.hasNeighboor(x.id, field, true));
      });
   }

   public checkMatch(oldSpot: FieldSpot, newSpot: FieldSpot) {
      return this.checkMatchType(oldSpot.spotType, oldSpot.biomType, newSpot.spotType, newSpot.biomType);
   }

   private checkMatchType(oldSpot: SpotType, oldBiom: BiomType, newSpot: SpotType, newBiom: BiomType) {
      const isEmpty = oldSpot <= SpotType.Hills;
      const isGreen = oldBiom === BiomType.Grass;

      if (newSpot === SpotType.Rift) return oldSpot >= SpotType.Tower;
      if (newSpot === SpotType.Cave) return oldSpot === SpotType.Mountain;
      if (newSpot === SpotType.Fort) return isEmpty && isGreen;
      if (newSpot === SpotType.Tower) return isEmpty && isGreen;
      if (newSpot === SpotType.Village1) return isEmpty && isGreen;
      if (newSpot === SpotType.Farm) return isEmpty && isGreen;
      if (newSpot === SpotType.Well) return isEmpty && isGreen;
      if (newSpot === SpotType.Woodman) return oldSpot === SpotType.Trees && isGreen;
      if (newBiom === BiomType.Grass) return oldBiom === BiomType.Sand;
      if (newSpot === SpotType.Fishing) return isEmpty && oldBiom === BiomType.Water;
      return oldSpot !== SpotType.Mountain && oldSpot !== SpotType.Cave;
   }

   private hasNeighboor(pos: number, field: GameField, inclideItself = false) {
      const neighboorSpots = this.getNeighborsSpots(pos, field, inclideItself).map((x) => x.spotType);
      return neighboorSpots.some((x) => x >= SpotType.Tower);
   }

   public destroy(spot: FieldSpot) {
      spot.resourceType = undefined;
      if (spot.spotType === SpotType.Cave) spot.spotType = SpotType.Mountain;
      else if (spot.spotType === SpotType.Woodman) spot.spotType = SpotType.Trees;
      else spot.spotType = SpotType.Empty;
   }

   private getNeighborsSpots(pos: number, field: GameField, inclideItself = false) {
      const neighboors = getNeighborsInRange(1, pos, field.width, field.height);
      if (inclideItself) neighboors.push(0);
      return neighboors.map((x) => field.spots[x]);
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
