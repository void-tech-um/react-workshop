import * as React from "react";
import ItemCard from "./ItemCard";
import { Item } from "../global/types";

interface ICartProps {
  // TODO: Implement me
  // Specify the types of the props that are passed to this component
}

// change "any" to the correct type
const Cart = ({ items, handleRemoveFromCart, handleCheckout }: any) => {
  return {
    /* 
        TODO: Add condition 
        If the items array is empty, display "Cart is empty"
    */
  } ? (
    <p style={{ textAlign: "center" }}>{/* TODO: Text */}</p>
  ) : (
    {
      /* 
        TODO: Add cart TSX here 
        Should use map to render the ItemCard components for each item in the items array
        Should have a Checkout button with an onClick event handler that calls the handleCheckout function
        Button should be disabled if the items array is empty
      */
    }
  );
};

export default Cart;
