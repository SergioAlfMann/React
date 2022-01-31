import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { data } from "../datos/productos"
import customFetch from "../utils/customFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);

    useEffect(() => {
        customFetch(2000, data[3])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

   return (
       <ItemDetail item={dato} />
   )

}

export default ItemDetailContainer;