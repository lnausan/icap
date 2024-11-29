import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../assets/images/about-us-bg.jpg'; // Imagen de fondo
import professionalImage from '../assets/images/professional.jpg'; // Imagen del profesional

const Profissionais = () => {
  return (
    <Box
      id="profissionais" // Identificador único para esta sección
      sx={{
        position: 'relative',
        width: '100vw', // Ocupa todo el ancho del navegador
        minHeight: '80vh', // Altura consistente
        margin: 0, // Elimina márgenes externos
        padding: '4rem', // Espaciado interno uniforme
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Cubre todo el espacio del contenedor
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Columnas en pantallas grandes
        alignItems: 'center', // Centrado vertical
        gap: '2rem', // Espaciado entre columnas
      }}
    >
      {/* Contenedor principal con más desplazamiento hacia la derecha */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          marginLeft: { xs: '3rem', md: '8rem' }, // Más margen para mover contenido hacia la derecha
        }}
      >
        {/* Columna izquierda: Texto */}
        <Box
          sx={{
            flex: 1,
            textAlign: 'left',
            maxWidth: '600px', // Limita el ancho del texto
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              fontSize: '1.8rem',
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
            Equipe Docente e Especialistas
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Formação Acadêmica: Especialização em Psicologia da Saúde, Psicologia Hospitalar, entre outras áreas. <br />
            Experiência Profissional: Atuação em hospitais, clínicas e projetos de saúde pública. <br />
            Diferenciais: Certificações, publicações, e participações em eventos científicos.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              fontSize: '1.8rem',
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
            Por Que Escolher Nossa Equipe?
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: '1.8',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Experiência prática em saúde mental e hospitalar. <br />
            Compromisso com o desenvolvimento ético e científico.
          </Typography>
        </Box>

        {/* Columna derecha: Imagen */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <a
            href="https://www.linkedin.com/in/professional"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={professionalImage}
              alt="Imagem do Profissional"
              sx={{
                width: '300px',
                height: '300px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                objectFit: 'cover',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  filter: 'brightness(1.1)',
                },
              }}
            />
          </a>
          {/* Firma debajo de la foto */}
          <Typography
            sx={{
              fontFamily: "'Sacramento', cursive",
              fontSize: '1.5rem',
              marginTop: '1rem',
              color: '#ffffff',
            }}
          >
            Cristiano Oliveira
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profissionais;
