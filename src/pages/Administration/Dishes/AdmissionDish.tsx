import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IDish from "../../../interfaces/IDish"

import { Link as RouterLink } from 'react-router-dom'

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
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dishes.map(dish => <TableRow key={dish.id}>
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
                             <RouterLink to={`/admin/pratos/${dish.id}`}>editar</RouterLink> 
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => exclude(dish)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdmissionDish;