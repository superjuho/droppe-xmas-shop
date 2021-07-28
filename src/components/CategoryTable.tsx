/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useCategoryItems } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import ShopContext from '../contexts/ShopContext'
import '../styles/StoreTable.css'
import '../styles/CategoryTable.css'
import cartIcon from '../static/icons/cartIcon.png'
import { useState, useEffect } from 'react'

const CategoryTable = (cat: any) => {
        const [items, setItems] = useState([])
        const [text, setText] = useState("")
        const texie = cat.match.params.cat;
        const itemArray = useCategoryItems(cat.match.params.cat);
        const cartId = 1;

        

        useEffect(() => {
            if (itemArray && itemArray !== null) {
                setItems(itemArray)
                if(texie === "men's clothing") {
                    setText("Something for that special little dude 😎")
                } if(texie === "electronics") {
                    setText("Cool new tech for christmas! 🤖")
                } if(texie === "jewelery") {
                    setText("Bling bling from Santa 💍")
                } if(texie === "women's clothing") {
                    setText("Something new for little princess 💄")
                }
            }
        }, [ itemArray, texie ]);
    

    return (
        <>
        <div className="categoryTitle">
             {cat.match.params.cat}
         </div>
         <div className="quote">
                " {text} "
             </div>
             <ShopContext.Consumer>
          {context => (
        <div className="storeTable">
            {items.map((item: any) =>
                <div className="item">
                <Link className="link" to={"/item/" + item.id}>
                    <img className="itemImage" src={item.image} alt="itemimage"></img>
                   </Link> 
                   <div className="itemText">
                        <div className="itemTitle">{item.title}</div>
                        <div className="itemCat">{item.category} </div>
                        <div className="itemPrice">{item.price} €</div>
                        <button className="addToCart" onClick={context.addProductToCart.bind(this, item, cartId)}>
                            <img className="addToCartBtn"src={cartIcon} alt="cartIcon"></img>
                            </button>
                    </div>
                </div>
            
            )}
        </div>
         )}
         </ShopContext.Consumer>
        </>
    )
}


export default CategoryTable
