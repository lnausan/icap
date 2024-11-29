import React from 'react';
import { Box, Button } from '@mui/material';
import logo from '../assets/images/logo.png';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '100%',
        background: 'transparent',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="ICAP Logo"
          sx={{
            height: '85px',
            width: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('hero-section')} // Redirige a HeroSection
        />

        {/* Navegación */}
        <Box
          component="nav"
          sx={{
            display: 'flex',
            gap: '1.5rem',
          }}
        >
          {/* Botones de navegación */}
          {[
            { id: 'about-us', text: 'Sobre Nós' },
            { id: 'nossos-servicos', text: 'Nossos Serviços' },
            { id: 'profissionais', text: 'Profissionais' },
            { id: 'capacitation', text: 'Capacitação' },
            { id: 'contato', text: 'Contato' },
          ].map(({ id, text }) => (
            <Button
              key={id}
              onClick={() => scrollToSection(id)}
              sx={{
                position: 'relative',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                background: 'transparent',
                outline: 'none',
                boxShadow: 'none', // Elimina el cuadro azul al hacer clic
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                '&:hover:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: '#fff',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: '#fff',
                  transition: 'width 0.3s ease-in-out',
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Botón destacado: Cursos */}
        <Button
          onClick={() => window.open('https://faculdadeiguacu.edu.br/', '_blank')} // Abre en nueva pestaña
          sx={{
            padding: '0.8rem 3rem',
            background: 'rgba(255, 255, 255, 0.3)',
            color: '#fff',
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontFamily: "'Poppins', sans-serif",
            outline: 'none',
            boxShadow: 'none', // Elimina el cuadro azul
            '&:focus': {
              outline: 'none',
              boxShadow: 'none', // También elimina el sombreado de enfoque
            },
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.5)',
            },
          }}
        >
          Cursos
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
