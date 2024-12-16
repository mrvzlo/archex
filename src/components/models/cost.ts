import { ResourceType } from '../enums/resource.type';

export default interface Cost {
   resource: ResourceType;
   count: number;
   important?: boolean;
}
