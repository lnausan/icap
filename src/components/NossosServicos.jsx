import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import backgroundImage from '../assets/images/nossos-servicos-bg.jpg';

const NossosServicos = () => {
  return (
    <Box
      id="nossos-servicos"
      component="section"
      sx={{
        padding: { xs: '2rem 1rem', sm: '4rem 2rem' },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        maxWidth: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        gap: '4rem', // Más espacio entre bloques
      }}
    >
      {/* Bloque 1: Descrição Geral dos Serviços */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: '1rem', md: '4rem' }, // Más espacio entre columnas en escritorio
          width: '100%',
          maxWidth: '1200px',
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            position: 'relative',
            '&:hover::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '0',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
          }}
        >
          Descrição Geral dos Serviços
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: { xs: '1px', md: '100%' },
            margin: { xs: '1rem 0', md: 0 },
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            lineHeight: '1.6',
          }}
        >
          Consultorias em Psicologia da Saúde e Hospitalar. <br />
          Programas de suporte psicológico para profissionais e pacientes. <br />
          Desenvolvimento de estratégias em saúde mental.
        </Typography>
      </Box>

      {/* Bloque 2: Áreas de Atuação */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: '1rem', md: '4rem' },
          width: '100%',
          maxWidth: '1200px',
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            position: 'relative',
            '&:hover::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '0',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
          }}
        >
          Áreas de Atuação
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: { xs: '1px', md: '100%' },
            margin: { xs: '1rem 0', md: 0 },
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            lineHeight: '1.6',
          }}
        >
          Psicologia hospitalar: atendimento em hospitais e clínicas. <br />
          Intervenções em saúde coletiva. <br />
          Consultorias em políticas públicas de saúde.
        </Typography>
      </Box>

      {/* Bloque 3: Benefícios dos Serviços */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: '1rem', md: '4rem' },
          width: '100%',
          maxWidth: '1200px',
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            position: 'relative',
            '&:hover::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '0',
              height: '2px',
              backgroundColor: '#ffffff',
              transition: 'width 0.3s ease-in-out',
            },
          }}
        >
          Benefícios dos Serviços
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: { xs: '1px', md: '100%' },
            margin: { xs: '1rem 0', md: 0 },
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            lineHeight: '1.6',
          }}
        >
          Abordagem humanizada. <br />
          Suporte com profissionais especializados. <br />
          Soluções baseadas nas melhores práticas científicas e éticas.
        </Typography>
      </Box>
    </Box>
  );
};

export default NossosServicos;
