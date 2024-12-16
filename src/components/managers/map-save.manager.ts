import MapSave from '../models/map-save';

export default class MapSaveManager {
   public loadSave(name: string): MapSave {
      const folder = this.folder();
      if (!folder) throw Error('File not found');
      const result = folder(`./${name}.json`);
      return this.deepClone(result);
   }

   private deepClone = (x: object) => JSON.parse(JSON.stringify(x));

   private folder = () => require.context('../../assets/maps', false, /\.json$/)!;
}
