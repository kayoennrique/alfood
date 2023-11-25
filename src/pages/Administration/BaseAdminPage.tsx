import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper, IconButton, MenuItem, Menu } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

const BaseAdminPage = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={(e) => handleMenu(e)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            onClose={() => handleClose()}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}

                        >
                            <MenuItem ><RouterLink to="/admin/restaurantes">Restaurante</RouterLink></MenuItem>
                            <MenuItem ><RouterLink to="/admin/restaurantes/novo">Novos Restaurantes</RouterLink></MenuItem>
                            <MenuItem><RouterLink to="/admin/pratos/">Pratos</RouterLink></MenuItem>
                            <MenuItem><RouterLink to="/admin/pratos/novo">Novos Pratos</RouterLink></MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Administração
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default BaseAdminPage;