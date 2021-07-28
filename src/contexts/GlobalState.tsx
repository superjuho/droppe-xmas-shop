import React, { useState, useReducer } from "react";

import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import { useAllItems } from "../hooks/ApiHooks";

const GlobalState = (props: any) => {
  const products = useAllItems();
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product: any) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product});
    }, 700);
  };

  const removeProductFromCart = (productId : number) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;