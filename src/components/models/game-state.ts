import { RoundStageType } from '../enums/round-stage.type';
import { RoundState } from '../enums/round-state';

export default class GameState {
   roundState = RoundState.BeforeStart;
   roundStage = RoundStageType.Night;
   round = 0;
   gameOverType = 0;

   restart() {
      this.round = 0;
      this.roundState = RoundState.BeforeStart;
      this.roundStage = RoundStageType.Night;
   }

   nextRound() {
      this.roundState = RoundState.DicePick;
      this.roundStage++;
      if (this.roundStage < 4) return;
      this.roundStage %= 4;
      this.round++;
   }
}
