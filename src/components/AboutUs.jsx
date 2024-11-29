import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../assets/images/about-us-bg.jpg'; // Ruta correcta de la imagen

const AboutUs = () => {
  return (
    <Box
      id="about-us" // Identificador único para esta sección
      component="section"
      sx={{
        padding: { xs: '2rem 1rem', sm: '4rem 2rem' },
        backgroundImage: `url(${backgroundImage})`, // Imagen de fondo
        backgroundSize: 'cover', // La imagen cubrirá todo el contenedor
        backgroundPosition: 'center', // Centrada
        backgroundRepeat: 'no-repeat', // Sin repetición
        width: '100%', // Asegura que ocupe todo el ancho
        maxWidth: '100%', // Evita cualquier desbordamiento
        overflow: 'hidden', // Evita desbordes
        margin: 0, // Sin márgenes externos
        minHeight: '70vh', // Altura ajustada
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centrar el contenido verticalmente
        alignItems: 'center', // Centrar el contenido horizontalmente
        textAlign: 'center',
      }}
    >
      {/* Título de la sección */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900, // Más grueso
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '9rem', // Separación adicional del título
          color: '#ffffff', // Texto en blanco
        }}
      >
        SOBRE NÓS
      </Typography>

      {/* Contenedor de las columnas */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Columnas en pantallas grandes, filas en pequeñas
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          gap: '3rem', // Más espacio entre columnas
          width: '100%', // Asegura que ocupa todo el ancho
          padding: '0 2rem', // Espaciado interno para las columnas
        }}
      >
        {/* Columna 1: Missão */}
        <Box
          sx={{
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900, // Más grueso
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff', // Texto en blanco
            }}
          >
            Missão
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#ffffff', // Texto en blanco
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.8', // Más espacio entre líneas
            }}
          >
            Oferecer serviços de alta qualidade em psicoterapia e capacitação,
            promovendo o bem-estar psicológico e o desenvolvimento profissional.
          </Typography>
        </Box>

        {/* Columna 2: Visão */}
        <Box
          sx={{
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900, // Más grueso
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff', // Texto en blanco
            }}
          >
            Visão
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#ffffff', // Texto en blanco
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.8', // Más espacio entre líneas
            }}
          >
            Ser referência em psicoterapia e capacitação, reconhecido pela
            excelência e compromisso com o desenvolvimento humano.
          </Typography>
        </Box>

        {/* Columna 3: Valores */}
        <Box
          sx={{
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900, // Más grueso
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: '#ffffff', // Texto en blanco
            }}
          >
            Valores
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#ffffff', // Texto en blanco
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.8', // Más espacio entre líneas
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
