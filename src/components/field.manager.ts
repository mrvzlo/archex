import GameField from './models/game-field';

export default class FieldManager {
   public createField(width: number, height: number) {
      const field = { spots: [], width, height } as GameField;
      const count = height * width + Math.ceil(height / 2);
      for (let i = 0; i < count; i++) {
         const spot = { empty: true };
         field.spots.push(spot);
      }
      this.formatField(field);
      return field;
   }

   public formatField(field: GameField) {
      field.spots.forEach((x, i) => {
         if (i > field.spots.length - field.width - 1) {
            x.available = false;
            return;
         }
         i %= field.width * 2 + 1;
         x.available = i > 0 && i !== field.width;
      });
   }
}
