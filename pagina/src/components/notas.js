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

import { getNotes, saveNote } from '../config/api';
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

export default function Notas() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5); const theme = useTheme();
    const [expandedAccordion, setExpandedAccordion] = React.useState(null);
    const [notes, setNotes] = React.useState([]);

    const handleChangeAccordion = (songId) => {
        setExpandedAccordion(expandedAccordion === songId ? null : songId);
    };

    

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

    const obtenerNotas = async () => {
        const data = await getNotes();
        const docs = [];
        data.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id});
        });
        console.log(docs);
        setNotes(docs);
    }

    React.useEffect(() => {
        obtenerNotas();
    }, []);

    return (
        <div className="articulo">
            <h1 className="titulo">Notitas de amorts 📝💕</h1>
            <div className="contenido">
                <p>
                    Siempre es un buen momento para recordarnos lo mucho que nos amamos, así que este espacio es para que puedas inspirarte y
                    dejarle una notita de amor a tu persona favorita. 🥰
                </p>
                <Button variant="outlined"
                    sx={{ color: '#1A5276' }}
                    component={NavLink}
                    to="/DMGF/notas/agregar">Agregar nota</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                            ? notes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : notes
                        ).map((note) => (
                            <TableRow key={note.id + 1}>
                                <TableCell component="th" scope="row">
                                    <Accordion key={note.id} expanded={expandedAccordion === note.id} onChange={() => handleChangeAccordion(note.id)} sx={{ width: '100%', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3-content"
                                            id="panel3-header"
                                        >
                                            {note.titulo}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className="contenido">
                                                <p>
                                                    {note.texto}
                                                </p>
                                            </div>
                                            <p className="firma">
                                                {note.fecha}
                                            </p>
                                        </AccordionDetails>
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
                                count={notes.length}
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
