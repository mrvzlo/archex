import { BiomType } from './biom.type';
import { ResourceType } from './resource.type';
import { SpotType } from './spot.type';

export default interface Card {
   num: number;
   name: string;
   resource: ResourceType;
   spot: SpotType;
   biom: BiomType;
   power?: number;
   converts?: number;
   aoePower?: number;
   aoeRange?: number;
   aoeResources?: ResourceType[];
}
