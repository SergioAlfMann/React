import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../datos/productos";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const urlParam = useParams();

    useEffect(() => {
        customFetch(2000, data.filter(item => {
            if(urlParam.idCategory) return item.categoryId === parseInt(urlParam.idCategory);
            return item;
        }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [datos]);

    return (
        <span>
            <ItemList items={datos} />
        </span>
    );
}

export default ItemListContainer;