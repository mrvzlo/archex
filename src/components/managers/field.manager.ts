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
         spot.available = col > left && col < right;
      });
   }

   private getDistance(pos1: number, pos2: number, width: number) {
      let x1 = pos1 % width;
      const y1 = Math.floor(pos1 / width);
      if (y1 % 2 == 1) x1 += 0.5;
      let x2 = pos2 % width;
      const y2 = Math.floor(pos2 / width);
      if (y2 % 2 == 1) x2 += 0.5;
      const dx = Math.abs(x1 - x2);
      const dy = Math.abs(y1 - y2);

      const horizontalSteps = dx * 2;
      const verticalSteps = dy > horizontalSteps ? (dy - horizontalSteps) / 2 : (horizontalSteps + dy) % 2;

      return verticalSteps + horizontalSteps;
   }

   public setMatches(field: GameField, spot: Spot | null) {
      field.spots.forEach((x) => (x.mismatch = !this.checkMatch(x, spot)));
   }

   public checkMatch(oldSpot: Spot, newSpot: Spot | null) {
      if (!newSpot) return true;
      const isEmpty = oldSpot.spotType === SpotType.Empty;
      const isRed = oldSpot.biomType === BiomType.Sand;

      if (newSpot.spotType === SpotType.Cave) return oldSpot.spotType === SpotType.Mountain;
      if (newSpot.spotType === SpotType.Fort) return isEmpty && !isRed;
      if (newSpot.spotType === SpotType.Tower) return isEmpty && !isRed;
      if (newSpot.spotType === SpotType.Village1) return isEmpty && !isRed;
      if (newSpot.spotType === SpotType.Farm) return isEmpty && !isRed;
      if (newSpot.spotType === SpotType.Woodman) return isEmpty && oldSpot.biomType === BiomType.Grass;
      if (newSpot.biomType === BiomType.Grass) return isRed;

      return oldSpot.spotType !== SpotType.Mountain && oldSpot.spotType !== SpotType.Cave;
   }
}
