import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IRestaurant from "../../../interfaces/IRestaurant";
import http from "../../../http";

const RestaurantForm = () => {
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            http.get<IRestaurant>(`restaurantes/${params.id}/`)
                .then(response => setRestaurantName(response.data.nome))
        }
    }, [params]);

    const [restaurantName, setRestaurantName] = useState('');
    const whenSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (params.id) {
            http.put(`restaurantes/${params.id}/`, {
                nome: restaurantName
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })
        } else {
            http.post('restaurantes/', {
                nome: restaurantName
            })
                .then(() => {
                    alert("Restaurante cadastrado com sucesso!")
                })
        }

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <Typography
                component="h1"
                variant="h6"
            >Formulário de Restaurantes
            </Typography>
            <Box component="form" onSubmit={whenSubmitForm}>
                <TextField
                    value={restaurantName}
                    onChange={event => setRestaurantName(event.target.value)}
                    label="Nome do Restaurante"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box >
    )
}

export default RestaurantForm;