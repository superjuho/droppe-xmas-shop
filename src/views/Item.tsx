import React from 'react'
import { useSingleItem } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import ShopContext from '../contexts/ShopContext'
import '../styles/Item.css'


const Item = (id: any) => {
    const itemInfo = useSingleItem(id.match.params.id)
    console.log("yksittäinen itemi: ",itemInfo)


    return (
        <ShopContext.Consumer>
          {context => (
        <div className="singleItem">
            <img src={itemInfo.image} alt="itemimage" className="singleItemImage"/>
            <div className="itemFooter">
                <div className="singleItemTitle">{itemInfo.title}</div>
                <div className="singleItemPrice">
                            {itemInfo.price} €
                        </div>
                <Link className="singleItemCat" to={"/category/" + itemInfo.category}>
                    {itemInfo.category}
                    </Link>
                <div className="itemDescription">
                    {itemInfo.description}
                </div>
                
                    <button className="singleItemAddToCartBtn" onClick={context.addProductToCart.bind(this, itemInfo)}>
                        Add To Cart!
                    </button>
                </div>
        </div>
         )}
         </ShopContext.Consumer>
    )
}


export default Item
