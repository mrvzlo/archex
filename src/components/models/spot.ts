import { BiomType } from './biom.type';
import { ResourceType } from './resource.type';
import { SpotType } from './spot.type';

export default interface Spot {
   id: number;
   available?: boolean;
   evenRow?: boolean;
   biomType: BiomType;
   spotType: SpotType;
   mismatch?: boolean;
   resourceType?: ResourceType;
}
