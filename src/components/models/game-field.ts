import FieldSpot from './field-spot';

export default interface GameField {
   spots: FieldSpot[];
   width: number;
   height: number;

   spotsToFeed: number;
}
