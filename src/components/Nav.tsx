import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useShoppingCarts } from '../hooks/ApiHooks'
import '../styles/Nav.css'

const Nav = () => {
    const baseUrl = "https://fakestoreapi.com/"
    const useCategoryItems = () => {
        const [data, setData] : any = useState([]);
        const fetchUrl = async () => {
            const results = await fetch(baseUrl + 'products/categories');
            const categories = await results.json();
    
            window.addEventListener("scroll", handleScroll);    
            setData(categories);
        }
    
        useEffect(()=> {
            fetchUrl();
        }, []);
        
        return data;
    }
    const categories = useCategoryItems()
    const carts = useShoppingCarts(3)


    
    const handleScroll = () => { // Navigation scroll behaviour
        if (window.scrollY > 20 && document.querySelector(".navigation") !== null) {
            const nav = document.querySelector(".navigation") as HTMLDivElement
            nav.className = "navigationActive"
        } else if (window.scrollY === 0 && document.querySelector(".navigationActive") !== null) {
            const nav = document.querySelector(".navigationActive") as HTMLDivElement
            nav.className = "navigation"
        }
    }

    useEffect(() => {
        handleScroll();
    }, [])

    return (
        <>
        <div className="navigation">
            <Link to="/">
                <div className="droppyXmas">
                    Droppy Xmas!
                </div>
                </Link>
                <Link to="/">
                    <div className="navigationItem">
                        All Products
                    </div>
                </Link>
                <div className="categories">
                    <div className="catTitle">
                        Category    
                    </div>
                    <div className="dropdown-content">
                    {categories.map((item: any) =>
                        <Link to={"/category/" +  item }>
                            <div className="cat">
                                {item}
                            </div>
                        </Link>
                    )}
                    </div>
                </div>
                <div className="navigationItem">
                    🗨 Contact 
                </div>
                <div className="shoppingCart">
                    Shopping Cart 🛒
                    <div className="cart">
                        {carts.map((item: any) =>
                        <div className="carts">
                             cart: {item.id}
                            {item.products.map((item: any)=>
                            <div className="cartProducts">
                            <div className="product">
                               product: {item.productId}
                            </div>
                            <div className="quantity">
                              quantity: {item.quantity}
                            </div>
                        </div>)}
                        </div>
                            )}
                    </div>
                </div>
        </div>
        </>
    )
}


export default Nav


