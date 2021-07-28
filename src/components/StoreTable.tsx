import React from 'react';
import { Link } from 'react-router-dom'
import ShopContext from '../contexts/ShopContext'
import '../styles/StoreTable.css'
import cartIcon from '../static/icons/cartIcon.png'

const StoreTable = (props: any) => {
    return (
        <>
        <div className="categoryTitle">
        All Products
        </div>
        <ShopContext.Consumer>
          {context => (
              <div className="storeTable">
                  {context.products.map((product: any) => (
                   
                    <div className="item">
                        <Link className="link" to={"/item/" + product.id}>
                        <img className="itemImage" src={product.image} alt="itemimage"></img>
                        </Link>
                        <div className="itemText">
                            <div className="itemTitle">{product.title}</div>
                            <Link className="link" to={"/category/" + product.category}>
                                <div className="itemCat">{product.category} </div>
                            </Link>
                            <div className="itemPrice">{product.price} €</div>
                            <button className="addToCart" onClick={context.addProductToCart.bind(this, product)}>
                                <img className="addToCartBtn"src={cartIcon} alt="cartIcon"></img>
                            </button>
                        </div>
                    </div>
                  ))}
              </div>
          )}
        </ShopContext.Consumer>
      </>
      );
    };
    
 
    export default StoreTable;