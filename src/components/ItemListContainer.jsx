import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestoreFetch } from "../utils/firebaseFetch";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(error => console.log(error));
    }, [idCategory]);

    return (
        <span>
            <ItemList items={datos} />
        </span>
    );
}
export default ItemListContainer;