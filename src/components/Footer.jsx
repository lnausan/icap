import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import logoAlt from '../assets/images/logo-alt.png'; // Ruta del nuevo logo

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        maxWidth: '100%',
        backgroundColor: '#e0e0e0',
        color: '#000000',
        padding: { xs: '1.5rem 1rem', md: '2rem 1rem' }, // Menos padding en móvil
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logoAlt}
        alt="ICAP Logo Alternativo"
        sx={{
          height: { xs: '60px', md: '100px' }, // Tamaño reducido en móvil
          width: 'auto',
          marginBottom: { xs: '1rem', md: '1.5rem' },
        }}
      />

      {/* Información */}
      <Grid
        container
        spacing={{ xs: 2, md: 4 }} // Espaciado más pequeño en móvil
        justifyContent="center"
        alignItems="center"
      >
        {/* WhatsApp */}
        <Grid item xs={12} md={3}>
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
                '&:hover': { color: '#25d366' },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginRight: '0.5rem' }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '1rem' }, // Texto más pequeño en móvil
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                +55 51 99159-9963
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Página Web */}
        <Grid item xs={12} md={3}>
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
                '&:hover': { color: '#00acee' },
              }}
            >
              <PublicIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginRight: '0.5rem' }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                psicoicap.com
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Correo Electrónico */}
        <Grid item xs={12} md={3}>
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
                '&:hover': { color: '#ff5722' },
              }}
            >
              <EmailIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginRight: '0.5rem' }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                psicoicap@gmail.com
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Instagram */}
        <Grid item xs={12} md={3}>
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
                '&:hover': { color: '#ff69b4' },
              }}
            >
              <InstagramIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginRight: '0.5rem' }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
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
          marginTop: { xs: '1.5rem', md: '2rem' },
          fontSize: { xs: '0.7rem', md: '0.9rem' }, // Más pequeño en móvil
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
