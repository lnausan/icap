import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import background from '../assets/images/header-background.jpg';

const HeroSection = () => {
  return (
    <Box
      id="hero-section" // Identificador único para esta sección
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
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        INSTITUTO DE CAPACITAÇÃO E ATENDIMENTO EM PSICOTERAPIA
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '1rem', maxWidth: '800px' }}>
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
