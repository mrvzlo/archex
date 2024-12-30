import { GoalType } from '../enums/goal.type';
import Cost from '../models/cost';
import GameField from '../models/game-field';
import Goal from '../models/goal';

export default class GoalManager {
   calculate(field: GameField, bank: Cost[], goals: Goal[]) {
      goals.forEach((goal) => {
         if (goal.type === GoalType.BiomCount) goal.current = field.spots.filter((x) => x.biomType === goal.filter).length;
         if (goal.type === GoalType.ResourceCount) goal.current = bank.find((x) => x.resource === goal.filter)?.count ?? 0;
         goal.completed = goal.current >= goal.count;
      });
   }
}
