import React, { FormEvent, useEffect, useState } from "react";

import ItemCard from "./ItemCard";
import Cart from "./Cart";
import ItemFactory from "./ItemFactory";

import { Item } from "../types/item";
import Api from "../helper/api";

const Market = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const api = new Api();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await api.getItems();
      setItems(items);
    };
    fetchItems();
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (item: Item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleAddItem = async (
    e: FormEvent<HTMLFormElement>,
    { itemName, itemPrice, itemCalories }: any
  ) => {
    e.preventDefault();
    const item: any = {
      name: itemName,
      price: itemPrice,
      calories: itemCalories,
    };
    await api.postItem(item);
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
      <Cart
        items={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      <ItemFactory handleAddItem={handleAddItem} />
    </div>
  );
};

export default Market;
