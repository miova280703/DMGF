import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import '../App.css';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'Pregunta 1',
        description: `¿De qué era el primer sticker que me enviaste?`,
    },
    {
        label: 'Pregunta 2',
        description: '¿Cuál es el nombre de nuestra primera canción?',
    },
    {
        label: 'Pregunta 3',
        description: `¿Cuál es el primer apellido de tu futura mujer?`,
    },
    {
        label: 'Pregunta 4',
        description: `Completa la frase: Mañana hay que _______`,
    },
    {
        label: 'Pregunta 5',
        description: `Completa la frase: La Madeline es una _______`,
    },
    {
        label: 'Pregunta 6',
        description: `Escoge la frase celebre del micro busero labioso xD`,
    },
];

const bannerStyle = {
    backgroundImage: `url(https://res.cloudinary.com/ingenieria/image/upload/v1703468641/Imagen_de_WhatsApp_2023-12-24_a_las_19.40.34_2623db9f_r71z69.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Ajusta la altura según sea necesario
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'bot',
    color: 'white',
    textAlign: 'center',
    fontSize: '15px',
  };

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>

        <div style={bannerStyle}>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ¿Y si respondes?
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
            <Box sx={{ maxWidth: 420, flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1A2C3E', textAlign: 'justify', lineHeight: '1.5' }}>
                    
                </Typography>
            </Box>

            <div className="centrar">
                <Box sx={{ maxWidth: 420, flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                            height: 50,
                            width: 280,
                            maxWidth: 420,
                            pl: 16,
                            bgcolor: '#FFE580',
                        }}
                    >
                        <center>
                            <Typography sx={{ color: '#1A2C3E', textAlign: 'justify', lineHeight: '1.5' }}>
                                {steps[activeStep].label}
                            </Typography>
                        </center>

                    </Paper>
                    <Box sx={{
                        height: 150, maxWidth: 420, width: '100%', p: 2,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}>
                        <Typography
                            sx={{
                                alignItems: 'center',
                                alignContent: 'center',
                                color: '#6E4B35',
                                textAlign: 'justify',
                                lineHeight: '1.5',
                                wordWrap: 'break-word', // Permite el ajuste de palabras
                                overflowWrap: 'break-word',
                            }}>
                            {steps[activeStep].description}
                        </Typography>
                        <br />

                        {
                            activeStep === 0 ? (
                                <div>
                                    <TextField
                                        label="Respuesta... 🙊"
                                        id="outlined-start-adornment"
                                        sx={{ m: 1, width: '25ch', '& input': { color: '#D16C00' }, }}
                                    />
                                </div>
                            ) : activeStep === 1 ? (
                                <div>
                                    <p>chau</p>
                                </div>
                            ) : (
                                <div>
                                    <p>hola chau</p>
                                </div>
                            )
                        }
                    </Box>
                    <br />
                    <MobileStepper sx={{ backgroundColor: '#A0D8F1' }}
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
        </>

    );
}