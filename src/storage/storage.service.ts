export default class StorageService {
   public getLocale = () => this.getValue('locale');
   public setLocale = (value: string) => this.setValue('locale', value);

   public getAudio = () => this.getValue('audio') === 'true';
   public setAudio = (value: boolean) => this.setValue('audio', value.toString());

   private setValue = (key: string, value: string) => localStorage.setItem(key, value);
   private getValue = (key: string) => localStorage.getItem(key);
}
