import { Button, Grid, IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IDish from "../../../interfaces/IDish"

import { Link as RouterLink } from 'react-router-dom'
import { Delete, Edit } from "@mui/icons-material"

const AdmissionDish = () => {

    const [dishes, setDishes] = useState<IDish[]>([])

    useEffect(() => {
        http.get<IDish[]>('pratos/')
            .then(response => setDishes(response.data))
    }, [])

    const exclude = (dishToBeDeleted: IDish) => {
        http.delete(`pratos/${dishToBeDeleted.id}/`)
            .then(() => {
                const listDishes = dishes.filter(dish => dish.id !== dishToBeDeleted.id)
                setDishes([...listDishes])
            })
    }

    return (
        <>
            <Grid container>
                <Grid item xs>
                    <Typography component="h1" variant="h6">
                        Formulário de Pratos
                    </Typography>
                </Grid>
                <Grid item>
                    <Link
                        variant="button"
                        component={RouterLink}
                        to="/admin/pratos/novo"
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
                            <TableCell>
                                Tag
                            </TableCell>
                            <TableCell>
                                Imagem
                            </TableCell>
                            <TableCell colSpan={2}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dishes?.map((dish) => (
                            <TableRow key={dish.id}>
                                <TableCell>
                                    {dish.nome}
                                </TableCell>
                                <TableCell>
                                    {dish.tag}
                                </TableCell>
                                <TableCell>
                                    <a href={dish.imagem} target="_blank" rel="noreferrer">Ver Imagem</a>
                                </TableCell>
                                <TableCell>
                                <Link
                                    variant="button"
                                    component={RouterLink}
                                    to={`/admin/pratos/${dish.id}`}
                                >
                                    <IconButton aria-label="editar">
                                        <Edit />
                                    </IconButton>
                                </Link>
                                <IconButton aria-label="deletar" onClick={() => exclude(dish)}>
                                    <Delete />
                                </IconButton>
                                    <RouterLink to={`/admin/pratos/${dish.id}`} />
                                </TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default AdmissionDish;