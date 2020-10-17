import { Item } from './item';

export class Category {
  id: number;
  key: string;
  url: string;
  items: Item[] = [];
}
