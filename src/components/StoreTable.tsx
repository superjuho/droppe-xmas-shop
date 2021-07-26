import React from 'react';
import { useAllItems } from '../hooks/ApiHooks';

const StoreTable = () => {
    const itemArray = useAllItems();
    console.log("Täämmöne", itemArray);

    return (
        <>
        <div>
            {itemArray.map((item: any) =>
            <div>
            <img src={item.image} alt="itemimage"></img>
            <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            </div>
            </div>
            )}
        </div>
        </>
    )
}

export default StoreTable;