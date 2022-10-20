import React from "react";
import { Item } from "../global/types";

interface IItemCardProps {
  // TODO: Implement me
  // Specify the types of the props that are passed to this component
}

// change "any" to the correct type
const ItemCard = ({ item, inCart, handleCart, disabled }: any) => {
  return {
    /* 
        TODO: Add Item Card TSX here 
        Should display the item's name, price, and calories
        Should conditionally render the Add to Cart or Remove from Cart button based on the inCart prop
        The button should have an onClick event handler that calls the handleCart function
        The button should be disabled if the disabled prop is true
    */
  };
};

export default ItemCard;
