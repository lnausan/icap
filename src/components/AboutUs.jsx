import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../assets/images/about-us-bg.jpg';

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      component="section"
      sx={{
        padding: { xs: '2rem 1rem', sm: '4rem 2rem' },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        margin: 0,
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Título de la sección */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontFamily: "'Poppins', sans-serif",
          marginBottom: { xs: '2rem', md: '4rem' }, // Más separación en escritorio
          color: '#ffffff',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          marginTop: { xs: '0', md: '-2rem' }, // Elevar título en escritorio
        }}
      >
        SOBRE NÓS
      </Typography>

      {/* Contenedor de las columnas */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '2rem', md: '4rem' }, // Más espacio entre columnas en escritorio
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Columna 1: Missão */}
        <Box
          sx={{
            maxWidth: { xs: '90%', md: '300px' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            Missão
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              lineHeight: '1.6',
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Oferecer serviços de alta qualidade em psicoterapia e capacitação,
            promovendo o bem-estar psicológico e o desenvolvimento profissional.
          </Typography>
        </Box>

        {/* Columna 2: Visão */}
        <Box
          sx={{
            maxWidth: { xs: '90%', md: '300px' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            Visão
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              lineHeight: '1.6',
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Ser referência em psicoterapia e capacitação, reconhecido pela
            excelência e compromisso com o desenvolvimento humano.
          </Typography>
        </Box>

        {/* Columna 3: Valores */}
        <Box
          sx={{
            maxWidth: { xs: '90%', md: '300px' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            Valores
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              lineHeight: '1.6',
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Ética, profissionalismo, respeito, empatia, compromisso, inovação,
            excelência.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
