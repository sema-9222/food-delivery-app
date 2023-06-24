import React, { createContext, useState } from "react";
import { Products } from "./Menu-Items/Food";

export const ShopContext = createContext(null);

function getDefaultItems() {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultItems());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCost = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = { cartItems, addToCart, removeFromCart, getTotalCost };
  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
