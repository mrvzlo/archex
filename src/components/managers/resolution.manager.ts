export default class ResolutionManager {
   upscale() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const wUp = (width > height ? width : height) / 1440;
      const hUp = (width > height ? height : width) / 900;
      let upscale = Math.min(wUp, hUp);
      if (upscale >= 1) upscale = 1;
      document.body.style.setProperty('--zoom', upscale.toString());
      return width > height;
   }
}
