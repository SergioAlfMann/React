import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firebaseFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const [existeProducto, setExisteProducto] = useState(true);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(() => {
                setExisteProducto(false);
            })
    }, [idItem, existeProducto]);
   return (      
          dato?.id
          ? <ItemDetail item={dato} />
          : (existeProducto === true ? 
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div> :
                <div class="d-flex justify-content-center">El producto no existe.</div>)             
   )

}

export default ItemDetailContainer;