import { BiomType } from '../enums/biom.type';
import { GoalType } from '../enums/goal.type';
import { ResourceType } from '../enums/resource.type';
import { SpotType } from '../enums/spot.type';

export default interface Goal {
   type: GoalType;
   count: number;
   filter: ResourceType | BiomType | SpotType;
}
