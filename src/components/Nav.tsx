import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/Nav.css'

const Nav = () => {
    const baseUrl = "https://fakestoreapi.com/"
    const useCategoryItems = () => {
        const [data, setData] : any = useState([]);
        const fetchUrl = async () => {
            const results = await fetch(baseUrl + 'products/categories');
            const categories = await results.json();
    
            
            setData(categories);
        }
    
        useEffect(()=> {
            fetchUrl();
        }, []);
        
        return data;
    }
    const categories = useCategoryItems();
    console.log("tässä nää navi categoriat", categories);

    return (
        <>
        <div className="navigation">
            <Link to="/">
                <div className="droppyXmas">
                    Droppy Xmas!
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
        </div>
        </>
    )
}


export default Nav


