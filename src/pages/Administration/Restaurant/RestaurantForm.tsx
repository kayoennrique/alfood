import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const RestaurantForm = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const whenSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: restaurantName
        })
            .then(() => {
                alert('Restaurante cadastrado com sucesso!')
            })
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