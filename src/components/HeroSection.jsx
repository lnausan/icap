import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import background from '../assets/images/header-background.jpg';

const HeroSection = () => {
  return (
    <Box
      id="hero-section"
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '0 1rem', // Espaciado lateral en dispositivos móviles
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '1rem',
          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' }, // Tamaño adaptable
        }}
      >
        INSTITUTO DE CAPACITAÇÃO E ATENDIMENTO EM PSICOTERAPIA
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: '1rem',
          maxWidth: '800px',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Tamaño adaptable
          lineHeight: { xs: '1.4', sm: '1.6', md: '1.8' }, // Espaciado entre líneas
        }}
      >
        Desenvolvemos profissionais e transformamos vidas com excelência em psicoterapia e capacitação.
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: '2rem',
          background: 'rgba(255, 255, 255, 0.3)',
          color: '#fff',
          textTransform: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '25px',
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, // Tamaño adaptable
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        Saiba Mais
      </Button>
    </Box>
  );
};

export default HeroSection;

