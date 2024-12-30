import Cost from './cost';
import FieldSpot from './field-spot';
import Goal from './goal';
import Spot from './spot';

export default interface MapSave {
   map: FieldSpot[];
   width: number;
   height: number;
   bank: Cost[];
   goal: Goal[];
   toolbar: Spot[];
}
