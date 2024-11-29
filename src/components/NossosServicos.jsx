import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import backgroundImage from '../assets/images/nossos-servicos-bg.jpg'; // Imagen de fondo

const NossosServicos = () => {
  return (
    <Box
      id="nossos-servicos" // Identificador único para esta sección
      component="section"
      sx={{
        padding: { xs: '2rem 1rem', sm: '4rem 2rem' },
        backgroundImage: `url(${backgroundImage})`, // Imagen de fondo
        backgroundSize: 'cover', // Que cubra todo el contenedor
        backgroundPosition: 'center', // Centrada
        backgroundRepeat: 'no-repeat', // Sin repetir
        width: '100%', // Ocupa todo el ancho
        maxWidth: '100%', // Asegura que no se desborde
        minHeight: '80vh', // Misma altura que SOBRE NÓS
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centrar el contenido verticalmente
        alignItems: 'center', // Centrar el contenido horizontalmente
        textAlign: 'center',
        color: '#ffffff', // Texto blanco
        overflow: 'hidden', // Evita cualquier desbordamiento
        gap: '4rem', // Más espacio entre los bloques
      }}
    >
      {/* Bloque 1: Descrição Geral dos Serviços */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Columnas en pantallas grandes, filas en pequeñas
          alignItems: 'center', // Alineación vertical de los elementos
          gap: '2rem',
          width: '100%', // Asegura que ocupa todo el ancho
          maxWidth: '1200px', // Ancho máximo para que no sea demasiado amplio
          position: 'relative', // Necesario para la animación de la línea
          '&:hover .line': {
            width: '100%', // Línea crece al hacer hover
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            textAlign: 'left', // Título alineado a la izquierda
          }}
        >
          Descrição Geral dos Serviços
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: '100%',
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: '1rem',
            lineHeight: '1.8', // Espaciado entre líneas
            textAlign: 'right', // Contenido alineado a la derecha
          }}
        >
          Consultorias em Psicologia da Saúde e Hospitalar. <br />
          Programas de suporte psicológico para profissionais e pacientes. <br />
          Desenvolvimento de estratégias em saúde mental.
        </Typography>
        {/* Línea animada */}
        <Box
          className="line"
          sx={{
            position: 'absolute',
            bottom: '-1px', // Justo debajo del título y el texto
            left: 0,
            width: '0%', // Comienza con 0% de ancho
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'width 0.4s ease-in-out', // Animación suave
          }}
        />
      </Box>

      {/* Bloque 2: Áreas de Atuação */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative', // Necesario para la animación de la línea
          '&:hover .line': {
            width: '100%',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            textAlign: 'left',
          }}
        >
          Áreas de Atuação
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: '100%',
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: '1rem',
            lineHeight: '1.8',
            textAlign: 'right',
          }}
        >
          Psicologia hospitalar: atendimento em hospitais e clínicas. <br />
          Intervenções em saúde coletiva. <br />
          Consultorias em políticas públicas de saúde.
        </Typography>
        {/* Línea animada */}
        <Box
          className="line"
          sx={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'width 0.4s ease-in-out',
          }}
        />
      </Box>

      {/* Bloque 3: Benefícios dos Serviços */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative', // Necesario para la animación de la línea
          '&:hover .line': {
            width: '100%',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            flex: '1',
            textAlign: 'left',
          }}
        >
          Benefícios dos Serviços
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: '#ffffff',
            height: '100%',
          }}
        />
        <Typography
          sx={{
            flex: '2',
            fontSize: '1rem',
            lineHeight: '1.8',
            textAlign: 'right',
          }}
        >
          Abordagem humanizada. <br />
          Suporte com profissionais especializados. <br />
          Soluções baseadas nas melhores práticas científicas e éticas.
        </Typography>
        {/* Línea animada */}
        <Box
          className="line"
          sx={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'width 0.4s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default NossosServicos;
