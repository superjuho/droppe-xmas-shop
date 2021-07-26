import React from 'react';
import { useAllItems } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import '../styles/StoreTable.css'

const StoreTable = () => {
    const itemArray = useAllItems();
    console.log("Täämmöne", itemArray);

    return (
        <>
        <div className="storeTable">
            {itemArray.map((item: any) =>
            <Link className="link" to={"/item/" + item.id}>
                <div className="item">
                    <img className="itemImage" src={item.image} alt="itemimage"></img>
                    <div className="itemText">
                        <div className="itemTitle">{item.title}</div>
                        <div className="itemCat">{item.category} </div>
                        <div className="itemPrice">{item.price} €</div>
                    </div>
                </div>
            </Link>
            )}
        </div>
        </>
    )
}

export default StoreTable;