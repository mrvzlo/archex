import { BiomType } from './biom.type';
import { ResourceType } from './resource.type';
import { SpotType } from './spot.type';

export default interface Card {
   num: number;
   resource: ResourceType;
   spotType: SpotType;
   biomType: BiomType;
   power?: number;
   converts?: number;

   aoePower?: number;
   aoeRange?: number;
   aoeResources?: ResourceType[];
}
