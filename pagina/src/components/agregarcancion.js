import React from 'react';
import './ArticuloDeRevista.css'; // Importar archivo CSS para estilos
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { saveSong } from '../config/apireproductor';

// Crear un emoji de girasol

const AgregarCancion = () => {
    const [nombreCancion, setNombreCancion] = React.useState('');
    const [nombreArtista, setNombreArtista] = React.useState('');
    const [linkYoutube, setLinkYoutube] = React.useState('');
    const [motivoRecuerdo, setMotivoRecuerdo] = React.useState('');

    const agregarCancion = async () => {
        const data = {
            cancion: nombreCancion,
            artista: nombreArtista,
            link: linkYoutube,
            motivo: motivoRecuerdo
        }
        if (nombreCancion === '' || nombreArtista === '' || linkYoutube === '' || motivoRecuerdo === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes llenar todos los campos!',
            })
            return;
        } else {

            await saveSong(data);
            Swal.fire({
                icon: 'success',
                title: 'Canción agregada!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


        return (
            <div className="articulo">
                <h1 className="titulo">Agregar canción</h1>
                <div className="contenido">
                    <p>
                        Llena el formulario para agregar una cancion a la lista de reproducción.
                    </p>
                </div>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ width: '100%', marginTop: '15px' }}>
                                <div className="contenido">
                                    <p>
                                        Ingresa el nombre de la canción:
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                    '& .MuiInputLabel-root': {
                                        color: '#1A5276', // color del label
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1A5276', // color del borde inicial
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1A5276', // color del borde al pasar el mouse
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1A5276', // color del borde cuando está enfocado
                                        },
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="nombreCancion"
                                    placeholder="Nombre Canción"
                                    variant="outlined"
                                    size='small'
                                    label="Nombre Canción"
                                    value={nombreCancion}
                                    onChange={(e) => setNombreCancion(e.target.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ width: '100%', marginTop: '15px' }}>
                                <div className="contenido">
                                    <p>
                                        Ingresa el nombre del artista:
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                    '& .MuiInputLabel-root': {
                                        color: '#1A5276', // color del label
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1A5276', // color del borde inicial
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1A5276', // color del borde al pasar el mouse
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1A5276', // color del borde cuando está enfocado
                                        },
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="nombreCancion"
                                    placeholder="Nombre del Artista"
                                    variant="outlined"
                                    size='small'
                                    label="Nombre del Artista"
                                    value={nombreArtista}
                                    onChange={(e) => setNombreArtista(e.target.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ width: '100%', marginTop: '15px' }}>
                                <div className="contenido">
                                    <p>
                                        Ingresa el link de YouTube de la canción:
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                    '& .MuiInputLabel-root': {
                                        color: '#1A5276', // color del label
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1A5276', // color del borde inicial
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1A5276', // color del borde al pasar el mouse
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1A5276', // color del borde cuando está enfocado
                                        },
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="nombreCancion"
                                    placeholder="Link de YouTube"
                                    variant="outlined"
                                    size='small'
                                    label="Link de YouTube"
                                    value={linkYoutube}
                                    onChange={(e) => setLinkYoutube(e.target.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ width: '100%', marginTop: '15px' }}>
                                <div className="contenido">
                                    <p>
                                        Ingresa el motivo o recuerdo:
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                    '& .MuiInputLabel-root': {
                                        color: '#1A5276', // color del label
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1A5276', // color del borde inicial
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1A5276', // color del borde al pasar el mouse
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1A5276', // color del borde cuando está enfocado
                                        },
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="nombreCancion"
                                    placeholder="Motivo o recuerdo"
                                    variant="outlined"
                                    size='small'
                                    label="Motivo o recuerdo"
                                    multiline
                                    rows={4}
                                    value={motivoRecuerdo}
                                    onChange={(e) => setMotivoRecuerdo(e.target.value)}
                                />
                            </Box>
                        </Grid>
                    </Grid><br /><br />
                    <Button variant="outlined"
                        sx={{ color: '#1A5276' }}
                        onClick={agregarCancion}
                        component={NavLink}
                        to="/DMGF/reproductor">Guardar canción</Button>
                </Box>
                <br /><br /><br /><br />
            </div>
        );
    }

    export default AgregarCancion;
