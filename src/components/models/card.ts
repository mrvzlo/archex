import { BiomType } from '../enums/biom.type';
import { ResourceType } from '../enums/resource.type';
import { SpotType } from '../enums/spot.type';

export default interface Card {
   num: number;
   resource: ResourceType;
   spotType: SpotType;
   biomType: BiomType;
   power: number;
   passive: number;
   converts: number;

   aoe?: AoeEffect[];
   consumes?: {
      resource: ResourceType;
      count: number;
   }[];
}

interface AoeEffect {
   power: number;
   range: number;
   resource: ResourceType;
}
