import React, { useContext, useEffect } from "react";
import ShopContext from "../contexts/ShopContext";
import "../styles/Cart.css";

const Cart = (props: any) => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
    <div className="shoppingCartTitle">
        Shopping Cart(s)
    </div>
      <div className="cart">
        {context.cart.length <= 0 && <p>You have no items in your cart</p>}
        <div className="itemsInCart">
          {context.cart.map((cartItem: any) => (
            <div key={cartItem.id}>
                <div className="itemInCart">
                    <img src={cartItem.image} alt="cartItemImage" className="cartItemImage"/>
                    <strong>{cartItem.title}</strong> - (
                    {cartItem.quantity} pcs) 
                    <div className="cartItemTotal">
                        {cartItem.price * cartItem.quantity} €
                        </div>
                <button className="removeFromCartBtn"
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default Cart;
