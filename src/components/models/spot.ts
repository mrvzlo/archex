import { SpotType } from './spot.type';

export default interface Spot {
   empty: boolean;
   available?: boolean;
   evenRow?: boolean;
   type: SpotType;
}
