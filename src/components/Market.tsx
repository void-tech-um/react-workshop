import React, { FormEvent, useEffect, useState } from "react";

import Cart from "./Cart";
import ItemCard from "./ItemCard";
import ItemFactory from "./ItemFactory";

import { Item } from "../global/types";

import Api from "../helper/api";

const Market = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const api = new Api();

  const fetchItems = async () => {
    const items = await api.getItems();
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (item: Item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleAddItem = async (e: FormEvent<HTMLFormElement>, item: Item) => {
    e.preventDefault();
    const newItem = await api.postItem(item);
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleCheckout = () => {
    cart.forEach(async (item) => {
      await api.deleteItem(item.id);
    });
    setItems((prevItems) => prevItems.filter((item) => !cart.includes(item)));
    setCart([]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Market</h1>
      <div className="row mx-auto">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            inCart={false}
            handleCart={handleAddToCart}
            disabled={cart.some((cartItem) => cartItem.id === item.id)}
          />
        ))}
      </div>
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>Cart</h2>
      <Cart
        items={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      <h2 style={{ textAlign: "center" }}>Sell an Item</h2>
      <ItemFactory handleAddItem={handleAddItem} />
    </div>
  );
};

export default Market;
