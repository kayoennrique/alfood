import { Box, Typography, TextField, Button } from '@mui/material';
import { Method } from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../../http';
import IRestaurant from '../../../interfaces/IRestaurant';

const FormRestaurant = () => {
  const params = useParams();
  const [name, setName] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      http.get<IRestaurant>(`/v2/restaurantes/${params.id}/`)
        .then(response => setName(response.data.nome))
    }
  }, [params])

  const whenSubmittingForm = (event: SyntheticEvent) => {
    event.preventDefault()
    let url = '/v2/restaurantes/'
    let method: Method = 'POST'
    if (params.id) {
      method = 'PUT'
      url += `${params.id}/`
    }
    http.request({
      url,
      method,
      data: {
        name
      }
    }).then(() => {
      navigate('/dashboard/restaurantes')
    })    
  }

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
            onChange={event => setName(event.target.value)}
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