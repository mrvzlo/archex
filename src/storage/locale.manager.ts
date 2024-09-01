import i18n from '@/i18n';
import StorageService from './storage.service';

export default class LocaleManager {
   public current = '';

   private service = new StorageService();

   constructor() {
      const current = this.service.getLocale() ?? 'en';
      this.setLocale(current);
   }

   public setLocale(newLocale: string) {
      this.current = newLocale;
      i18n.global.locale.value = newLocale;
      this.service.setLocale(newLocale);
   }
}
