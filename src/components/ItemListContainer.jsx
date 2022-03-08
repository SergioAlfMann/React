import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestoreFetch } from "../utils/firebaseFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [idCategory]);

  return <ItemList items={datos} />;
};
export default ItemListContainer;
