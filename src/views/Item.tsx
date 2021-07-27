import React from 'react'
import { useSingleItem } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import '../styles/Item.css'


const Item = (id: any) => {
    const itemInfo = useSingleItem(id.match.params.id)
    console.log("yksittäinen itemi: ",itemInfo)


    return (
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
                
                    <div className="singleItemAddToCartBtn">
                        Add To Cart!
                    </div>
                </div>
        </div>
    )
}


export default Item
