import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import logoAlt from '../assets/images/logo-alt.png'; // Ruta del logo alternativo

const Footer = () => {
  return (
    <Box
      id="contato" // Identificador único para la sección
      component="footer"
      sx={{
        width: '100vw',
        maxWidth: '100%',
        backgroundColor: '#d3d3d3', // Fondo gris claro
        color: '#000000',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logoAlt}
        alt="ICAP Logo Alternativo"
        sx={{
          height: '100px',
          width: 'auto',
          marginBottom: '1rem',
        }}
      />

      {/* Información de contacto */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* WhatsApp */}
        <Grid item xs={12} md={3} textAlign="center">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link
              href="https://wa.me/5551991599963"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#25d366' }, // Hover de WhatsApp
              }}
            >
              <WhatsAppIcon sx={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              <Typography sx={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                +55 51 99159-9963
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Página Web */}
        <Grid item xs={12} md={3} textAlign="center">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link
              href="https://psicoicap.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#00acee' }, // Hover para la página web
              }}
            >
              <PublicIcon sx={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              <Typography sx={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                psicoicap.com
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Correo Electrónico */}
        <Grid item xs={12} md={3} textAlign="center">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link
              href="mailto:psicoicap@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#ff5722' }, // Hover para el correo electrónico
              }}
            >
              <EmailIcon sx={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              <Typography sx={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                psicoicap@gmail.com
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Instagram */}
        <Grid item xs={12} md={3} textAlign="center">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link
              href="https://www.instagram.com/psicoicap?igsh=MnRoajFobWJhYzNw"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                '&:hover': { color: '#ff69b4' }, // Hover para Instagram
              }}
            >
              <InstagramIcon sx={{ fontSize: '2rem', marginRight: '0.5rem' }} />
              <Typography sx={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                Instagram
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Derechos Reservados */}
      <Typography
        variant="body2"
        sx={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          fontFamily: "'Poppins', sans-serif",
          color: '#333333',
        }}
      >
        © {new Date().getFullYear()} ICAP. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
