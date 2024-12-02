import { RoundStageType } from './round-stage.type';
import { RoundState } from './round-state';

export default class GameState {
   roundState = RoundState.BeforeStart;
   roundStage = RoundStageType.Night;
   round = 0;

   nextRound() {
      this.roundState = RoundState.DicePick;
      this.roundStage++;
      if (this.roundStage < 4) return;
      this.roundStage %= 4;
      this.round++;
   }
}
