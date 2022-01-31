import Item from "./Item";
import { useState, useEffect } from "react";
import { CardGroup, Container, Row, Col, } from "react-bootstrap";

const ItemList = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        let is_ok = true;
        const data = [
            {
                id: 1,
                name: "Agua Con Gas 1,5 lts",
                stock: 86,
                cost: 45,
            },
            {
                id: 2,
                name: "Agua Sin Gas 1,5 lts",
                stock: 100,
                cost: 140,
            },
            {
                id: 3,
                name: "Coca Cola 1,5 lts",
                stock: 92,
                cost: 200,
            },
            {
                id: 4,
                name: "Agua Saborizada 1 lts",
                stock: 92,
                cost: 180,
            },
            {
                id: 5,
                name: "Gancia  750 ml",
                stock: 92,
                cost: 350,
            },
            {
                id: 6,
                name: "Sta Isabel 750 ml",
                stock: 92,
                cost: 350,
            }
        ]
        let mostrarDatos = (data) => {
            return data;
        }
        let consultaDatos = (time, task) => {
            return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } else {
                    reject("Error")
                }
            });
        }
        consultaDatos(2000, mostrarDatos(data))
            .then(respuesta => setDatos(respuesta))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container fluid>
            <div class="col">
                <div class="row">
                    {
                        datos.map(producto => (
                            <Item  key={producto.id} item={producto}></Item>
                           
                        ))
                    }
                 </div>

            </div>
        </Container>
        );
}

export default ItemList;