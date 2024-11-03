import { BiomType } from '../models/biom.type';
import { ResourceType } from '../models/resource.type';
import FieldSpot from '../models/field-spot';

export default class DrawingManager {
   public getSpotResourceImg(resource: ResourceType) {
      const folder = this.getResourceFolder();
      if (!folder) return '';
      return folder(`./${resource}.png`);
   }

   public getSpotImg(spot: FieldSpot) {
      const folder = this.getSpotFolder(spot.biomType);
      if (!folder) return '';
      return folder(`./${spot.spotType}.png`);
   }

   private getSpotFolder(biom: BiomType) {
      switch (biom) {
         case BiomType.Grass:
            return this.getGrassFolder();
         case BiomType.Sand:
            return this.getSandFolder();
         case BiomType.Water:
            return this.getWaterFolder();
      }
   }

   private getGrassFolder = () => require.context('../../assets/images/grass', false, /\.png$/)!;
   private getSandFolder = () => require.context('../../assets/images/sand', false, /\.png$/)!;
   private getWaterFolder = () => require.context('../../assets/images/water', false, /\.png$/)!;
   private getResourceFolder = () => require.context('../../assets/images/resources', false, /\.png$/)!;
}
