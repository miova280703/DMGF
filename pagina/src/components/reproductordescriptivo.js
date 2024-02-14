import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import './ArticuloDeRevista.css';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

// import { getWebsites, saveWebsite } from '../config/api';
import { getSongs } from '../config/apireproductor';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function Reproductor() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5); const theme = useTheme();
    const [expandedAccordion, setExpandedAccordion] = React.useState(null);
    const [songs, setSongs] = React.useState([]);

    // Función para reproducir la canción desde la página web
    const playSong = (songId) => {
        setSongs(prevSongs => prevSongs.map((song) => {
            if (song.id === songId) {
                return { ...song, playing: !song.playing };
            }
            return { ...song, playing: false };
        }));
    };

    const handleSongEnded = (songId) => {
        setSongs(prevSongs => prevSongs.map((song) => {
            if (song.id === songId) {
                return { ...song, playing: false };
            }
            return song;
        }));
    };

    const handleChangeAccordion = (songId) => {
        setExpandedAccordion(expandedAccordion === songId ? null : songId);
    };

    // const agregarnota = async () => {
    //     const timestamp = new Date();
    //     const nota = {
    //         texto: "Eres lo más lindo de este mundo",
    //         fecha: timestamp
    //     }
    //     await saveWebsite(nota);
    // }

    // Función para abrir Spotify y reproducir la canción
    const openSpotify = async () => {

    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const obtenerSongs = async () => {
        const data = await getSongs();
        const docs = [];
        data.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id, playing: false });
        });
        console.log(docs);
        setSongs(docs);
    }

    React.useEffect(() => {
        obtenerSongs();
    }, []);

    return (
        <div className="articulo">
            <h1 className="titulo">Recordemos con canciones 🎶</h1>
            <div className="contenido">
                <p>
                    La música es parte de nosotras y de nuestra relación, nos hemos compartido muchas canciones 🙊 canciones que nos gustan, que nos pensar en la otra,
                    que expresan lo que sentimos y creo que no debemos de dejar morir ese momento al escuchar una canción que nos
                    recuerde a la otra y el motivo por el cual nos la mandamos. Así que esta sección es para eso, para recordar con canciones.
                    Escogí las que yo creo que son las más significativas, pero tu puedes agregar más.
                    Por cierto, si querés escuchar alguna canción, solo dale click al botón de play 🙊.
                </p>
                <Button variant="outlined"
                    sx={{ color: '#1A5276' }}
                    component={NavLink}
                    to="/DMGF/reproductor/agregar">Agregar canción</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                            ? songs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : songs
                        ).map((song) => (
                            <TableRow key={song.id + 1}>
                                <TableCell component="th" scope="row">
                                    <Accordion key={song.id} expanded={expandedAccordion === song.id} onChange={() => handleChangeAccordion(song.id)} sx={{ width: '100%', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3-content"
                                            id="panel3-header"
                                        >
                                            <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1A5276', width: '100%' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                                    <CardContent>
                                                        <Typography component="div" variant="h5" sx={{ color: '#FFFFFF' }}>
                                                            {song.cancion}
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: '#FFFFFF' }}>
                                                            {song.artista}
                                                        </Typography>
                                                    </CardContent>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <IconButton aria-label="previous">
                                                            {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: '#D3D3D3', width: '24px', height: '24px' }} /> : <SkipPreviousIcon sx={{ color: '#D3D3D3', width: '24px', height: '24px' }} />}
                                                        </IconButton>
                                                        <IconButton aria-label="play/pause" onClick={() => playSong(song.id)}>
                                                            {song.playing ? <PauseIcon sx={{ color: '#FFFFFF', width: '28px', height: '28px' }} /> : <PlayArrowIcon sx={{ color: '#FFFFFF', width: '28px', height: '28px' }} />}
                                                        </IconButton>
                                                        <IconButton aria-label="next">
                                                            {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: '#D3D3D3', width: '24px', height: '24px' }} /> : <SkipNextIcon sx={{ color: '#D3D3D3', width: '24px', height: '24px' }} />}
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                                <ReactPlayer
                                                    url={song.link}
                                                    playing={song.playing}
                                                    controls={false}
                                                    onEnded={() => handleSongEnded(song.id)}
                                                    style={{ display: 'none' }} // Para ocultar el reproductor de ReactPlayer
                                                />
                                            </Card>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className="contenido">
                                                <p>
                                                    {song.motivo}
                                                </p>
                                            </div>
                                        </AccordionDetails>
                                        <AccordionActions>
                                            <Button onClick={() => setExpandedAccordion(null)} sx={{ color: '#1A5276' }}>Ocultar</Button>
                                        </AccordionActions>
                                    </Accordion>
                                </TableCell>

                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={songs.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'canciones por página',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <br /><br /><br /><br />
        </div>
    );
}
