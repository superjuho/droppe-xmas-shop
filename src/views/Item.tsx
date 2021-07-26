import React from 'react'
import { useSingleItem } from '../hooks/ApiHooks'


const Item = (id: any) => {
    const itemInfo = useSingleItem(id.match.params.id)
    console.log("yksittäinen itemi: ",itemInfo)


    return (
        <div>
            <h2>{itemInfo.title}</h2>
            <div>
                {itemInfo.category}
            </div>
            <img src={itemInfo.image} alt="itemimage"/>
            <div>
                <div>
                    {itemInfo.description}
                </div>
                <div>
                    {itemInfo.price} €
                </div>
            </div>
        </div>
    )
}


export default Item
