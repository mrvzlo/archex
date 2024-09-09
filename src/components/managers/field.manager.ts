import { BiomType } from '../models/biom.type';
import GameField from '../models/game-field';
import Spot from '../models/spot';
import { SpotType } from '../models/spot.type';

export default class FieldManager {
   public createField(width: number, height: number, spots: Spot[]) {
      const field = { spots, width, height } as GameField;
      this.formatField(field);
      this.setMatches(field, null);
      return field;
   }

   public formatField(field: GameField) {
      field.spots.forEach((spot, i) => {
         const row = Math.floor(i / field.width);
         spot.evenRow = row % 2 == 1;
         const col = i % field.width;
         const left = spot.evenRow ? -1 : 0;
         const right = field.width - 0;
         spot.num = i;
         spot.available = col > left && col < right;
      });
   }

   public setMatches(field: GameField, spot: Spot | null) {
      field.spots.forEach((x) => {
         x.mismatch = !!spot && (!this.checkMatch(x, spot) || !this.hasNeighboor(x.num, field));
      });
   }

   public checkMatch(oldSpot: Spot, newSpot: Spot) {
      return this.checkMatchType(oldSpot.spotType, oldSpot.biomType, newSpot.spotType, newSpot.biomType);
   }

   private checkMatchType(oldSpot: SpotType, oldBiom: BiomType, newSpot: SpotType, newBiom: BiomType) {
      const isEmpty = oldSpot <= SpotType.Hills;
      const isGreen = oldBiom === BiomType.Grass;

      if (newSpot === SpotType.Cave) return oldSpot === SpotType.Mountain;
      if (newSpot === SpotType.Fort) return isEmpty && isGreen;
      if (newSpot === SpotType.Tower) return isEmpty && isGreen;
      if (newSpot === SpotType.Village1) return isEmpty && isGreen;
      if (newSpot === SpotType.Farm) return isEmpty && isGreen;
      if (newSpot === SpotType.Woodman) return oldSpot === SpotType.Trees && isGreen;
      if (newBiom === BiomType.Grass) return oldBiom === BiomType.Sand;
      if (newSpot === SpotType.Fishing) return isEmpty && oldBiom === BiomType.Water;
      return oldSpot !== SpotType.Mountain && oldSpot !== SpotType.Cave;
   }

   private hasNeighboor(pos: number, field: GameField) {
      const width = field.width;
      const neighboors = [-1, +1, -width, +width];
      const odd = Math.floor(pos / width) % 2 !== 0;
      if (odd) neighboors.push(-width + 1, width + 1);
      else neighboors.push(-width - 1, width - 1);
      const neighboorSpots = neighboors
         .map((x) => x + pos)
         .filter((x) => x >= 0 && x < field.height * field.width)
         .map((x) => field.spots[x].spotType);
      if (pos === 10) console.log(neighboorSpots);
      return neighboorSpots.some((x) => x >= SpotType.Tower);
   }
}
