import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';

import { getWebsites, saveWebsite } from '../config/api';


export default function MediaControlCard() {
    const theme = useTheme();
    const [playing, setPlaying] = React.useState(false);

    // Función para reproducir la canción desde la página web
    const playSong = () => {
        // Reproduce la canción desde la página web

        if (playing) {
            // const audio = document.getElementById('audio');
            // audio.pause();
            setPlaying(false);
            return;
        } else {
            setPlaying(true);
            // const audio = document.getElementById('audio');
            // audio.play();
            return;
        }

    };

    const handleSongEnded = () => {
        setPlaying(false);
    };

    const agregarnota = async () => {
        const timestamp = new Date();
        const nota = {
            texto: "Eres lo más lindo de este mundo",
            fecha: timestamp
        }
        await saveWebsite(nota);
    }

    // Función para abrir Spotify y reproducir la canción
    const openSpotify = async () => {
        // Redirige al usuario a la URL de la canción en Spotify
        // window.open('https://open.spotify.com/your-song-url', '_blank');
        const data = await getWebsites();
        const docs = [];
        data.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        console.log(docs);
    };

    return (
        <Card sx={{ display: 'flex', backgroundColor: '#1A5276' }}>
            <Box sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" sx={{ color: '#FFFFFF' }}>
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: '#FFFFFF' }}>
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous" onClick={agregarnota}>
                        {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: '#D3D3D3' }} /> : <SkipPreviousIcon sx={{ color: '#D3D3D3' }} />}
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={playSong}>
                        {playing ? <PauseIcon sx={{ height: 38, width: 38, color: '#FFFFFF' }} /> : <PlayArrowIcon sx={{ height: 38, width: 38, color: '#FFFFFF' }} />}
                        {/* <PlayArrowIcon sx={{ height: 38, width: 38 }} /> */}
                    </IconButton>
                    <IconButton aria-label="next" onClick={openSpotify}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: '#D3D3D3' }} /> : <SkipNextIcon sx={{ color: '#D3D3D3' }} />}
                    </IconButton>
                </Box>
            </Box>
            {/* <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://res.cloudinary.com/ingenieria/image/upload/v1703468641/Imagen_de_WhatsApp_2023-12-24_a_las_19.40.34_2623db9f_r71z69.jpg"
                alt="Live from space album cover"
            /> */}
            {/* Elemento de audio para reproducir la canción desde la página web */}
            {/* <audio id="audio" src="https://res.cloudinary.com/ingenieria/video/upload/v1707442023/musicDMGF/lasLocuras_pr8tpl.mp3">
                Tu navegador no soporta el elemento de audio.
            </audio> */}
            <ReactPlayer
                url="https://res.cloudinary.com/ingenieria/video/upload/v1707442023/musicDMGF/lasLocuras_pr8tpl.mp3"
                playing={playing}
                controls={false}
                onEnded={handleSongEnded}
                style={{ display: 'none' }} // Para ocultar el reproductor de ReactPlayer
            />
        </Card>
    );
}
