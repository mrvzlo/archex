export default class AudioManager {
   private removePath: string;
   private placePath: string;

   constructor(public on: boolean) {
      this.removePath = require('../../assets/audio/remove.mp3')!;
      this.placePath = require('../../assets/audio/place.mp3')!;
   }

   public toggle() {
      this.on = !this.on;
   }

   public playDestroy() {
      if (!this.on) return;
      this.play(this.removePath);
   }

   public playPlace() {
      if (!this.on) return;
      this.play(this.placePath);
   }

   private play(path: string) {
      const audio = new Audio(path);
      audio.play();
   }
}
