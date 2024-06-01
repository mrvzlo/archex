import Spot from './spot';

export default interface GameField {
   spots: Spot[];
   width: number;
   height: number;
}
