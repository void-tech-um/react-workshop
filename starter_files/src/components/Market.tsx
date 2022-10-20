import React, { FormEvent, useEffect, useState } from "react";
import { Item } from "../global/types";
import Api from "../helper/api";

const Market = () => {
  const [items, setItems] = useState<Item[]>([]); // <--- This is the state: items array
  const [cart, setCart] = useState<Item[]>([]); // <--- This is the state: cart array

  const api = new Api();

  const fetchItems = async () => {
    // TODO: Implement me
    // This function should fetch all items from the API and set the items state. Hint: use the api object
    // Handle errors using try/catch
  };

  useEffect(() => {
    // TODO: Implement me
    // This is a react hook that will be called when the component is mounted
    // The empty array at the end means that this will only be called once at the start when the component is mounted
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (item: Item) => {
    // TODO: Implement me
    // This function should add the item to the cart by adding it to the cart state variable
  };

  const handleRemoveFromCart = (item: Item) => {
    // TODO: Implement me
    // This function should remove the item from the cart by removing it from the cart state variable
  };

  const handleAddItem = async (e: FormEvent<HTMLFormElement>, item: Item) => {
    // TODO: Implement me
    // This function should start a POST request to the API to add a new item to the database. Hint: use the api object
    // If the request is successful, the items state variable should be updated with the new item
  };

  const handleCheckout = () => {
    // TODO: Implement me
    // This function should start a DELETE request to the API to delete the items in cart (imagine this is checking out). Hint: use the api object
    // If the request is successful, the cart state variable should be emptied
  };

  return (
    // TODO: Implement me
    // This is the TSX for the Market component
    // It should contain the ItemFactory component and the Cart component
    // It should also use map to render the ItemCard components for each item in the items state variable
    <h1> Hello VOID! </h1> // This is to make the compiler happy
  );
};

export default Market;
