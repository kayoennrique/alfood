import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IRestaurant from "../../../interfaces/IRestaurant";

const RestaurantForm = () => {
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            axios.get<IRestaurant>(`http://localhost:8000/api/v2/restaurantes/${params.id}/`)
                .then(response => setRestaurantName(response.data.nome))
        }
    }, [params]);

    const [restaurantName, setRestaurantName] = useState('');
    const whenSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (params.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, {
                nome: restaurantName
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })
        } else {
            axios.post('http://localhost:8000/api/v2/restaurantes/', {
                nome: restaurantName
            })
                .then(() => {
                    alert("Restaurante cadastrado com sucesso!")
                })
        }

    }

    return (
        <form onSubmit={whenSubmitForm}>
            <TextField
                value={restaurantName}
                onChange={event => setRestaurantName(event.target.value)}
                label="Nome do Restaurante"
                variant='standard'
            />
            <Button
                type="submit"
                variant="outlined"
            >
                Salvar
            </Button>
        </form>
    );
}

export default RestaurantForm;