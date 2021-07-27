/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useCategoryItems } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import '../styles/StoreTable.css'
import '../styles/CategoryTable.css'
import cartIcon from '../static/icons/cartIcon.png'
import { useState, useEffect } from 'react'

const CategoryTable = (cat: any) => {
        const [items, setItems] = useState([])
        const [text, setText] = useState("")
        const texie = cat.match.params.cat;
        const itemArray = useCategoryItems(cat.match.params.cat);

        

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
        <div className="storeTable">
            {items.map((item: any) =>
            <Link className="link" to={"/item/" + item.id}>
                <div className="item">
                    <img className="itemImage" src={item.image} alt="itemimage"></img>
                    <div className="itemText">
                        <div className="itemTitle">{item.title}</div>
                        <div className="itemCat">{item.category} </div>
                        <div className="itemPrice">{item.price} €</div>
                        <div className="addToCart">
                            <img className="addToCartBtn"src={cartIcon} alt="cartIcon"></img>
                        </div>
                    </div>
                </div>
            </Link>
            )}
        </div>
        </>
    )
}


export default CategoryTable
