import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IRestaurant from '../../../interfaces/IRestaurant';
import { Grid, IconButton, Link, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import http from '../../../http';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>()
  useEffect(() => {
    http.get<IRestaurant[]>('/restaurantes/')
      .then(response => setRestaurants(response.data))
  }, [])
  const deleted = (restaurant:IRestaurant) => {
    http.delete(`/restaurantes/${restaurant.id}/`)
      .then(() => {
        if (restaurants) {         
          setRestaurants([
            ...restaurants.filter(x => x.id !== restaurant.id)
          ])
        }
      })
  }
  return (
    <>
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h6">
            Restaurantes
          </Typography>
        </Grid>
        <Grid item>
          <Link
            variant="button"
            component={RouterLink}
            to="/admin/restaurantes/novo"
          >
            Novo
          </Link>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell colSpan={2}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants?.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell>
                  {restaurant.nome}
                </TableCell>
                <TableCell>
                  <Link
                    variant="button"
                    component={RouterLink}
                    to={`/admin/restaurantes/${restaurant.id}`}
                  >
                    <IconButton aria-label="editar">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton aria-label="deletar" onClick={() => deleted(restaurant)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Restaurants;