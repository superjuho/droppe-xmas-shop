import React from "react";


export default React.createContext({
  products: [],
  cart: [],
  addProductToCart: (product:object) => {},
  removeProductFromCart: (productId:number) => {}
});
