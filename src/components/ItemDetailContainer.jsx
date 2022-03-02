import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firebaseFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
   return (      
          dato?.id
          ? <ItemDetail item={dato} />
          : <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
             
   )

}

export default ItemDetailContainer;