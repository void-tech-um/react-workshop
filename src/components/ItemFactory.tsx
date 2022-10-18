import React, { useState, FormEvent } from "react";
import { Item } from "../types/item";

interface IItemProps {
  handleAddItem: (e: FormEvent<HTMLFormElement>, item: any) => Promise<void>;
}

const ItemFactory = ({ handleAddItem }: IItemProps) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0.0);
  const [itemCalories, setItemCalories] = useState(0);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Sell an Item</h2>
      <form
        onSubmit={(e) => {
          handleAddItem(e, { itemName, itemPrice, itemCalories });
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            value={itemPrice}
            onChange={(event) => setItemPrice(parseFloat(event.target.value))}
            id="price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            className="form-control"
            value={itemCalories}
            onChange={(event) => setItemCalories(parseInt(event.target.value))}
            id="calories"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "1rem" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ItemFactory;
