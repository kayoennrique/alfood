import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IRestaurant from "../../../interfaces/IRestaurant";
import ITag from "../../../interfaces/ITag"
import { useParams } from 'react-router-dom';
import IDish from "../../../interfaces/IDish";

const FormDish = () => {

    const { id } = useParams();
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');

    const [tag, setTag] = useState('');
    const [restaurant, setRestaurant] = useState('');

    const [image, setImage] = useState<File | null>(null);

    const [tags, setTags] = useState<ITag[]>([]);
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/')
            .then(response => setTags(response.data.tags))
        http.get<IRestaurant[]>('restaurantes/')
            .then(response => setRestaurants(response.data))
    }, []);

    useEffect(() => {
        if (id) {
            http.get<IDish>(`/pratos/${id}/`)
                .then(response => setDishName(response.data.nome))
            http.get<IDish>(`/pratos/${id}/`)
                .then(response => setDescription(response.data.descricao))
            http.get<IDish>(`/pratos/${id}/`)
                .then(response => setTag(response.data.tag))
        }
    }, []);

    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            setImage(event.target.files[0]);
        } else {
            setImage(null);
        }
    }

    const whenSubmittingForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('nome', dishName);
        formData.append('descricao', description);

        formData.append('tag', tag);

        formData.append('restaurante', restaurant);

        if (image) {
            formData.append('imagem', image);
        }

        if (id) {
            http.put<IDish>(`/pratos/${id}/`, {
                "nome": dishName,
                "descricao": description,
                "restaurante": restaurant
            })
                .then(() => {
                    alert("Prato atualizado com sucesso!")
                });
        } else {
            http.post<IDish>(`/pratos/`, {
                "nome": dishName,
                "descricao": description,
                "tag": tag,
                "restaurante": restaurant
            })
                .then(() => {
                    alert("Prato cadastrado com sucesso!")
                });
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Pratos</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={whenSubmittingForm}>
                <TextField
                    value={dishName}
                    onChange={event => setDishName(event.target.value)}
                    label="Nome do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    label="Descrição do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />

                <FormControl margin="dense" fullWidth >
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select labelId="select-tag" value={tag} onChange={event => setTag(event.target.value)}>
                        {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth >
                    <InputLabel id="select-restaurante">Restaurante</InputLabel>
                    <Select labelId="select-restaurante" value={restaurant} onChange={event => setRestaurant(event.target.value)}>
                        {restaurants.map(restaurant => <MenuItem key={restaurant.id} value={restaurant.id}>
                            {restaurant.nome}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <input type="file" onChange={selectFile} />

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormDish;