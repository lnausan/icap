import React, { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '100%',
        background: 'rgba(0, 0, 0, 0.2)', // Fondo más transparente
        color: '#fff',
        padding: '0.5rem 1rem',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="ICAP Logo"
          sx={{
            height: '70px',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('hero-section')}
        />

        {/* Menú de Navegación */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Oculto en móviles
            gap: '1.5rem',
          }}
        >
          {[
            { text: 'Sobre Nós', id: 'about-us' },
            { text: 'Nossos Serviços', id: 'nossos-servicos' },
            { text: 'Profissionais', id: 'profissionais' },
            { text: 'Capacitação', id: 'capacitation' },
            { text: 'Contato', id: 'footer' },
          ].map((item, idx) => (
            <Button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                boxShadow: 'none',
                position: 'relative',
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
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
          <Button
            onClick={() => window.open('https://faculdadeiguacu.edu.br/', '_blank')}
            sx={{
              padding: '0.8rem 3rem',
              background: 'rgba(255, 255, 255, 0.3)',
              color: '#fff',
              borderRadius: '25px',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { background: 'rgba(255, 255, 255, 0.5)' },
              outline: 'none',
              boxShadow: 'none',
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            }}
          >
            Cursos
          </Button>
        </Box>

        {/* Menú móvil */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: '#000', // Fondo negro
              color: '#fff',
              padding: '1rem',
            },
          }}
        >
          <List>
            {[
              { text: 'Sobre Nós', id: 'about-us' },
              { text: 'Nossos Serviços', id: 'nossos-servicos' },
              { text: 'Profissionais', id: 'profissionais' },
              { text: 'Capacitação', id: 'capacitation' },
              { text: 'Contato', id: 'footer' },
            ].map((item, idx) => (
              <ListItem
                button
                key={idx}
                onClick={() => {
                  scrollToSection(item.id);
                  setDrawerOpen(false);
                }}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  color: '#fff',
                  '&:hover': { color: '#f0f0f0' },
                }}
              >
                {item.text}
              </ListItem>
            ))}
            {/* Botón "Cursos" dentro del Drawer */}
            <ListItem
              button
              onClick={() => {
                window.open('https://faculdadeiguacu.edu.br/', '_blank');
                setDrawerOpen(false);
              }}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff',
                borderRadius: '25px',
                padding: '0.8rem 1.5rem',
                marginTop: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  color: '#000',
                },
              }}
            >
              Cursos
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;

