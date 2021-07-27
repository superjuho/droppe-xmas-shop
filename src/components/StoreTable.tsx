import React from 'react';
import { useAllItems } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import '../styles/StoreTable.css'
import cartIcon from '../static/icons/cartIcon.png'

const StoreTable = () => {
    const itemArray = useAllItems();

    return (
        <>
        <div className="categoryTitle">
             All Products
        </div>
        <div className="storeTable">
            {itemArray.map((item: any) =>
            <Link className="link" to={"/item/" + item.id}>
                <div className="item">
                    <img className="itemImage" src={item.image} alt="itemimage"></img>
                    <div className="itemText">
                        <div className="itemTitle">{item.title}</div>
                        <Link className="link" to={"/category/" + item.category}>
                            <div className="itemCat">{item.category} </div>
                        </Link>
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

export default StoreTable;