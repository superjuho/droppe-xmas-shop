import React, { useContext, useEffect } from "react"
import ShopContext from "../contexts/ShopContext"
import { Link } from 'react-router-dom'
import "../styles/Cart.css"

const Cart = (props: any) => {
  const context = useContext(ShopContext)

  useEffect(() => {
    console.log(context)
  }, [])

  return (
    <>
    <div className="shoppingCartTitle">
        Shopping Cart(s)
    </div>
      <div className="cart">
        {context.cart.length <= 0 && <p>You have no items in your cart</p>}
          {context.cart.map((cartItem: any) => (
                <div className="itemInCart" key={cartItem.id}>
                <Link className="cartItemLink" to={"/item/" + cartItem.id}>
                <strong className="cartItemTitle">{cartItem.title} - (
                    {cartItem.quantity} pcs) </strong>
                    <img src={cartItem.image} alt="cartItemImage" className="cartItemImage"/>
                        </Link>
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
          ))}
        </div>
    </>
  )
}

export default Cart;
