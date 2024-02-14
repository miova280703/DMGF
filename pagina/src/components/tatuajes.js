import React from 'react';
import './ArticuloDeRevista.css'; // Importar archivo CSS para estilos
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import { getTattoCima, getTattosCima, saveTattoCima } from '../config/apitatuajes';
import { getTattoDmgf, getTattosDmgf, saveTattoDmgf } from '../config/apitatuajes1';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Tatuajes = () => {
    const [value, setValue] = React.useState(0);
    const [tatujaesDidi, setTatuajesDidi] = React.useState([]);
    const [tatuajesIovita, setTatuajesIovita] = React.useState([]);
    const [nuevoTatuajeDidi, setNuevoTatuajeDidi] = React.useState('');
    const [nuevoTatuajeIovita, setNuevoTatuajeIovita] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const obtenerTatuajesCima = async () => {
        const data = await getTattosCima();
        const docs = [];
        data.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id, playing: false });
        });
        console.log(docs);
        setTatuajesDidi(docs);
    }

    const obtenerTatuajesDmgf = async () => {
        const data = await getTattosDmgf();
        const docs = [];
        data.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id, playing: false });
        });
        console.log(docs);
        setTatuajesIovita(docs);
    }

    const guardarTatuajeCima = async () => {
        const data = {
            tatuaje: nuevoTatuajeIovita
        }
        await saveTattoDmgf(data);
        Swal.fire({
            icon: 'success',
            title: 'Tatuaje agregado!',
            showConfirmButton: false,
            timer: 1500
        })
        setNuevoTatuajeIovita('');
        obtenerTatuajesDmgf();
    }

    const guardarTatuajeDmgf = async () => {
        const data = {
            tatuaje: nuevoTatuajeDidi
        }
        await saveTattoCima(data);
        Swal.fire({
            icon: 'success',
            title: 'Tatuaje agregado!',
            showConfirmButton: false,
            timer: 1500
        })
        setNuevoTatuajeDidi('');
        obtenerTatuajesCima();
    }


    React.useEffect(() => {
        obtenerTatuajesCima();
        obtenerTatuajesDmgf();
    }, []);


    return (
        <div className="articulo">
            <h1 className="titulo">Tatuajes sin tinta 💉</h1>
            <div className="contenido">
                <p>
                    Sos la persona con la que quiero seguir haciendo cosas "Por Primera Vez", cuando las he hecho me ha gustado y he sentido lindo hacerlas contigo, porque sos tú y 
                    tú eres especial y mereces este lado tierno y adorable que despiertas en mi.
                    En lo que estaba programando esta sección me puse a pensar que tú ya viviste e hiciste cosas por primera vez con otras personas y que lindo porque me imagino que han
                    sido momentos muy espciales. Pero también analice que cada vez que las haces 
                    con una nueva persona es como si fuera la primera vez, porque todo es distinto, la persona, el momento, el lugar, lo que sientes... todo es distinto que al final hace que sea la
                    primera vez. 
                    Siento que tú conmigo también estas haciendo y viviendo cosas por primera vez, que llegue a la conclusión que sería lindo que ambas las listaramos así las dos somos 
                    conscientes y felices 🙊 de esas primeras veces.
                </p>
            </div>
            <Box sx={{ width: '100%', color: '#1A5276' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} textColor='#1A5276' aria-label="basic tabs example">
                        <Tab label="Didi" {...a11yProps(0)} />
                        <Tab label="Iovita" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className="contenido">
                        <p>
                            Cosas que he hecho por primera vez con Didi:
                        </p>
                        {tatujaesDidi.map((nota, index) => (
                            <li key={index} className="nota">
                                <span className="bullet">&#8226;</span>
                                <p className="firma">{nota.tatuaje}</p>
                            </li>
                        ))}
                    </div>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            textColor='#1A5276'
                        >
                            Agregar nuevo tatuaje
                        </AccordionSummary>
                        <AccordionDetails>
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
                                    placeholder="Nuevo Tatuaje"
                                    variant="outlined"
                                    size='small'
                                    label="Nuevo Tatuaje"
                                    value={nuevoTatuajeDidi}
                                    onChange={(e) => setNuevoTatuajeDidi(e.target.value)}
                                />
                            </Box>
                        </AccordionDetails>
                        <AccordionActions>
                            <Button sx={{ color: '#1A5276' }} onClick={guardarTatuajeDmgf}>Guardar</Button>
                        </AccordionActions>
                    </Accordion>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className="contenido">
                        <p>
                            Cosas que he hecho por primera vez con Iovita:
                        </p>
                        {tatuajesIovita.map((nota, index) => (
                            <li key={index} className="nota">
                                <span className="bullet">&#8226;</span>
                                <p className="firma">{nota.tatuaje}</p>
                            </li>
                        ))}
                    </div>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Agregar nuevo tatuaje
                        </AccordionSummary>
                        <AccordionDetails>
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
                                    placeholder="Nuevo Tatuaje"
                                    variant="outlined"
                                    size='small'
                                    label="Nuevo Tatuaje"
                                    value={nuevoTatuajeIovita}
                                    onChange={(e) => setNuevoTatuajeIovita(e.target.value)}
                                />
                            </Box>
                        </AccordionDetails>
                        <AccordionActions>
                            <Button sx={{ color: '#1A5276' }} onClick={guardarTatuajeCima}>Guardar</Button>
                        </AccordionActions>
                    </Accordion>
                </CustomTabPanel>
            </Box>
            <br /><br /><br /><br />
        </div>
    );
}

export default Tatuajes;
