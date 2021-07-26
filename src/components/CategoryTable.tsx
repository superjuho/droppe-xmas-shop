import React from 'react'
import { useCategoryItems } from '../hooks/ApiHooks'
import { Link } from 'react-router-dom'
import '../styles/StoreTable.css'

const CategoryTable = (cat: any) => {
   
    const itemArray = useCategoryItems(cat.match.params.cat);

    return (
        <>
        <h2>
             {cat.match.params.cat}
         </h2>
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


export default CategoryTable
