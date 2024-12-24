import { ResourceType } from '../enums/resource.type';
import AnimatedSpot from './animated-spot';
import Spot from './spot';

export default interface FieldSpot extends Spot, AnimatedSpot {
   id: number;
   available?: boolean;
   evenRow?: boolean;
   mismatch?: boolean;
   resourceType?: ResourceType;
}
