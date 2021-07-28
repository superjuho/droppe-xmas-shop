/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

const baseUrl = "https://fakestoreapi.com/";

//Using all items of the shop in front page
const useAllItems = () => {
    const [data, setData] : any = useState([]);
    const fetchUrl = async () => {
        const results = await fetch(baseUrl + 'products');
        const json = await results.json();

        const items = await Promise.all(
            json.map(async (item: any) => {
                return {
                   ...item, 
                }
            })
        );
        // console.log('useAllTiems', items);
        setData(items);
    }

    useEffect(()=> {
        fetchUrl();
    }, []);
    
    return data;
}

//Using selected category items in front page. Cat being the category.
const useCategoryItems = (cat: string) => {
    const [data, setData] : any = useState([]);
    const fetchUrl = async () => {
        const results = await fetch(baseUrl + 'products/category/' + cat);
        const json = await results.json();

        const items = await Promise.all(
            json.map(async (item: any) => {
                return {
                   ...item, 
                }
            })
        );
        // console.log('useCategory', items);
        setData(items);
    }

    useEffect(()=> {
        fetchUrl();
    }, [cat]);
    
    return data;
}

//Using selected item in it's own page.
const useSingleItem = (id: number) => {
    const [data, setData] : any = useState([]);
    const fetchUrl = async (fileid: number) => {
        const results = await fetch(baseUrl + 'products/' + id);
        const item = await results.json();
        console.log('useItem', item);
        setData(item);
    };

    useEffect(()=> {
        fetchUrl(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    
    return data;
}

const useShoppingCarts = (id: number) => {
    const [data, setData] : any = useState([]);
    const fetchUrl = async () => {
        const results = await fetch(baseUrl + 'carts/user/' + id);
        const carts = await results.json();
        const dataWithProductInfo = await Promise.all(carts.map( async (cart: any) => {
            const productInfos = await Promise.all(cart.products.map(async( info: any )=> {
                const productInfo = await getProductInfo(info.productId)
                return {
                    ...info,
                    ...productInfo,
                }
            }))
            return {
                ...cart,
                products: productInfos,
            }
        }))
        setData(dataWithProductInfo);
    }

    useEffect(()=> {
        fetchUrl();
    }, []);
    console.log("koridata", data);
    return data;
}




const getProductInfo = async (id: number) => {
    const results = await fetch('https://fakestoreapi.com/products/' + id);
    const itemInfo = await results.json();
    const data = {title:"", price:"", image:""}
    data.title = itemInfo.title
    data.price = itemInfo.price
    data.image = itemInfo.image
    return data;
   
}

const makeUser = () => {

}

const addToCart = () => {

}

export {
    useAllItems,
    useCategoryItems,
    useSingleItem,
    useShoppingCarts,
    makeUser,
    addToCart,
}