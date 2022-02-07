import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../datos/productos"
import customFetch from "../utils/customFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const urlParam = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(urlParam.idItem)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

   return (
       
          dato?.id
          ? <ItemDetail item={dato} />
          : <p> Cargando ...</p> 
      
   )

}

export default ItemDetailContainer;