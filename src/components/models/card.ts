import { BiomType } from './biom.type';
import { ResourceType } from './resource.type';
import { SpotType } from './spot.type';

export default interface Card {
   num: number;
   resource: ResourceType;
   spotType: SpotType;
   biomType: BiomType;
   power?: number;
   passive?: number;
   converts?: number;

   aoe?: AoeEffect[];
   consumes?: {
      resource?: ResourceType;
      count?: number;
   }[];
}

interface AoeEffect {
   power?: number;
   range?: number;
   resources?: ResourceType;
}
