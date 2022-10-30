// File to store interfaces used by many components in the app

export interface Item {
  id?: number;
  name: string;
  price: number;
  calories: number;
}

export interface IApi {
  base_url: string;
  getItems: (token: string) => Promise<Item[]>;
  postItem: (item: Item, token: string) => Promise<Item>;
  deleteItem: (id: number, token: string) => Promise<void>;
}
