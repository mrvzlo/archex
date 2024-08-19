import { BiomType } from './biom.type';
import Card from './card';
import { ResourceType } from './resource.type';
import { SpotType } from './spot.type';

export default interface Spot {
   available?: boolean;
   evenRow?: boolean;
   biomType: BiomType;
   spotType: SpotType;
   mismatch?: boolean;
   resourceType?: ResourceType;
}
