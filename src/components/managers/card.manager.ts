import { BiomType } from '../models/biom.type';
import Card from '../models/card';
import { ResourceType } from '../models/resource.type';
import { SpotType } from '../models/spot.type';

export default class CardManager {
   private cards: Card[];

   constructor() {
      this.cards = require('../../assets/json/cards.json')!;
   }

   public findCardByResource(resourceType: ResourceType) {
      return this.cards.find((x) => x.resource === resourceType);
   }

   public findRandomCardsBySpot(spotType: SpotType, biomType: BiomType) {
      const cards = this.findCardsBySpot(spotType, biomType);
      console.log(spotType, biomType);

      const random: Card[] = [];
      for (let i = 0; i < 3 && cards.length > 0; i++) {
         const index = this.rand(cards.length);
         const temp = cards[index];
         cards[index] = cards[0];
         cards[0] = temp;
         random.push(cards.shift()!);
      }
      return random;
   }

   public findCardsBySpot(spotType: SpotType, biomType: BiomType) {
      return this.cards.filter((x) => x.spotType === spotType && x.biomType === biomType);
   }

   private rand(max: number) {
      return Math.floor(Math.random() * max);
   }
}
