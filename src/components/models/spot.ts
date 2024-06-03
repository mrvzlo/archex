import { BiomType } from './biom.type';
import { SpotType } from './spot.type';

export default interface Spot {
   available?: boolean;
   evenRow?: boolean;
   biomType: BiomType;
   spotType: SpotType;
}
