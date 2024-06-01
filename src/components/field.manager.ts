import GameField from './models/game-field';
import { SpotType } from './models/spot.type';

export default class FieldManager {
   public createField(width: number, height: number) {
      const field = { spots: [], width, height } as GameField;
      const count = height * width;
      for (let i = 0; i < count; i++) {
         const spot = { empty: true, type: SpotType.Dirt };
         field.spots.push(spot);
      }
      this.formatField(field);
      return field;
   }

   public formatField(field: GameField) {
      field.spots.forEach((spot, i) => {
         const row = Math.floor(i / field.width);
         spot.evenRow = row % 2 == 0;
         const col = i % field.width;
         const left = Math.floor(Math.abs(Math.floor(field.height / 2) - row) / 2) - 1;
         const right = field.width - Math.ceil(Math.abs(Math.floor(field.height / 2) - row) / 2);
         spot.available = col > left && col < right;
      });
   }
}
