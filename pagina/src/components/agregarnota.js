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
import { saveNote } from '../config/api';

// Crear un emoji de girasol

const AgregarNota = () => {
    const [tituloNota, setTituloNota] = React.useState('');
    const [nota, setNota] = React.useState('');

    const agregarNotas = async () => {
        const timestamp = new Date();
        const fechaa = timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear();
        const datanota = {
            titulo: tituloNota,
            texto: nota,
            fecha: fechaa
        }
        
        if (tituloNota === '' || nota === '' ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes llenar todos los campos!',
            })
            return;
        } else {

            await saveNote(datanota);
            Swal.fire({
                icon: 'success',
                title: 'Nota agregada!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    /**
     * const agregarnota = async () => {
        
    }
     */


    return (
        <div className="articulo">
            <h1 className="titulo">Agregar Nota</h1>
            <div className="contenido">
                <p>
                    Llena el formulario para agregar una nueva notita de amor. 💌
                </p>
            </div>
            <Box sx={{ flexGrow: 1, }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box sx={{ width: '100%', marginTop: '15px' }}>
                            <div className="contenido">
                                <p>
                                    Ingresa el titulo de la nota:
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
                                placeholder="Titulo nota"
                                variant="outlined"
                                size='small'
                                label="Titulo nota"
                                value={tituloNota}
                                onChange={(e) => setTituloNota(e.target.value)}
                            />
                        </Box>
                    </Grid>


                    <Grid item xs={4}>
                        <Box sx={{ width: '100%', marginTop: '15px' }}>
                            <div className="contenido">
                                <p>
                                    Escribe la notita:
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
                                placeholder="Notita de amor"
                                variant="outlined"
                                size='small'
                                label="Notita de amor"
                                multiline
                                rows={4}
                                value={nota}
                                onChange={(e) => setNota(e.target.value)}
                            />
                        </Box>
                    </Grid>
                </Grid><br /><br />
                <Button variant="outlined"
                    sx={{ color: '#1A5276' }}
                    onClick={agregarNotas}
                    component={NavLink}
                    to="/DMGF/notas">Guardar nota</Button>
            </Box>
            <br /><br /><br /><br />
        </div>
    );
}

export default AgregarNota;
