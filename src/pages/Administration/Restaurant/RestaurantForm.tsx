import { Box, Typography, TextField, Button } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import http from '../../../http';
import IRestaurant from '../../../interfaces/IRestaurant';

const FormRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id) {
      http.get<IRestaurant>(`/restaurantes/${id}/`)
        .then(response => setName(response.data.nome))
    }
  },[]);

  const whenSubmittingForm = (event: SyntheticEvent) => {
    event.preventDefault();
    if (id) {
      http.put<IRestaurant>(`/restaurantes/${id}/`, {
        "nome": name
      })
        .then(() => {
          alert("Restaurante atualizado com sucesso!")
        });
    } else {
      http.post<IRestaurant>(`/restaurantes/`, {
        "nome": name
      })
        .then(() => {
          alert("Restaurante cadastrado com sucesso!")
        });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h6">
          Formulário de restaurante
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={whenSubmittingForm}>
          <TextField
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin='dense'
            id="nome"
            label="Nome"
            type="text"
            fullWidth />
          <Button type='submit' fullWidth variant="contained">Salvar</Button>
        </Box>
      </Box>
    </>
  );
}

export default FormRestaurant;