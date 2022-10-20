import axios from "axios";
import { IApi, Item } from "../global/types";

export default class Api implements IApi {
  base_url: string;
  constructor() {
    this.base_url = "http://santiagomed.pythonanywhere.com/api/v1";
  }

  getItems = async () => {
    // TODO: Implement me
    return []; // This is just to make the compiler happy
  };

  postItem = async (item: Item) => {
    // TODO: Implement me
    return item; // This is just to make the compiler happy
  };

  deleteItem = async (id: any) => {
    // TODO: Implement me
  };
}
