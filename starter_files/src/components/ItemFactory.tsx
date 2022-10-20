import React, { useState, FormEvent } from "react";
import { Item } from "../global/types";

interface IItemFactoryProps {
  // TODO: Implement me
  // Specify the types of the props that are passed to this component
}

// change "any" to the correct type
const ItemFactory = ({ handleAddItem }: any) => {
  // Set the state using the useState hook
  // Hint: The state variables should keep track of the value entered in the input fields of the form

  return {
    /* 
        TODO: Add Item Factory TSX here. Hint: It's a form 
        The form should have an onSubmit event handler that calls the handleAddItem function
        The form should have three input fields: name, price, and calories
        The onChange event handler of each input field should update the corresponding state variable
    */
  };
};

export default ItemFactory;
