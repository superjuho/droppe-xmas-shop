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
        console.log('useAllTiems', items);
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
        console.log('useCategory', items);
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

export {
    useAllItems,
    useCategoryItems,
    useSingleItem,
}