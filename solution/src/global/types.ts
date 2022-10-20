// File to store interfaces used by many components in the app

export interface Item {
  id?: number;
  name: string;
  price: number;
  calories: number;
}

export interface IApi {
  base_url: string;
  getItems: () => Promise<Item[]>;
  postItem: (item: Item) => Promise<Item>;
  deleteItem: (id: number) => Promise<void>;
}
