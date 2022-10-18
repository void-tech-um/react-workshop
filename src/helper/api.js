import axios from "axios";

export default class Api {
  constructor() {
    this.base_url = "http://santiagomed.pythonanywhere.com/api/v1";
  }

  getItems = async () => {
    try {
      const response = await axios.get(`${this.base_url}/items/`);
      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  };

  postItem = async (item) => {
    try {
      const response = await axios.post(`${this.base_url}/items/`, item);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteItem = async (id) => {
    try {
      await axios.delete(`${this.base_url}/items/${id}/`);
    } catch (error) {
      console.log(error);
    }
  };
}
