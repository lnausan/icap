import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';

const Capacitation = () => {
  return (
    <Box
      id="capacitation" // Identificador único para esta sección
      component="section"
      sx={{
        width: '100vw', // Ocupa todo el ancho del navegador
        maxWidth: '100%', // Asegura que no haya desbordamiento
        minHeight: '100vh', // Cubre toda la altura del viewport
        margin: 0,
        padding: 0, // Elimina cualquier padding
        backgroundColor: '#000000', // Fondo negro
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        color: '#ffffff',
        overflow: 'hidden', // Evita desbordamientos
        textAlign: 'center',
      }}
    >
      {/* Contenedor Principal */}
      <Box
        sx={{
          maxWidth: '1200px', // Limita el ancho del contenido para mantenerlo visualmente limpio
          width: '100%',
          padding: '4rem 2rem', // Espaciado interno
        }}
      >
        {/* Descrição dos Cursos Disponíveis */}
        <Grid container spacing={4}>
          {/* Especialização em Psicologia */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              <PsychologyIcon sx={{ fontSize: '3rem', marginBottom: '1rem' }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Especialização em Psicologia
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Objetivo:</strong> Capacitar profissionais para atuar em contextos de saúde e hospitalar.
                <br />
                <strong>Estrutura modular:</strong> Fundamentos teóricos, avaliação, intervenção e supervisão prática.
                <br />
                <strong>Metodologia ativa:</strong> Aulas síncronas e práticas.
              </Typography>
            </Box>
          </Grid>

          {/* Outros Cursos e Workshops */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              <GroupIcon sx={{ fontSize: '3rem', marginBottom: '1rem' }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Outros Cursos e Workshops
              </Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: '1.6' }}>
                • Programas curtos de atualização em psicologia.
                <br />
                • Workshops sobre bioética, psicofarmacologia e saúde coletiva.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Diferenciais dos Cursos */}
        <Box sx={{ marginTop: '4rem', textAlign: 'center' }}>
          <SchoolIcon sx={{ fontSize: '4rem', color: '#ffffff', marginBottom: '1rem' }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Diferenciais dos Cursos
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: '1.6' }}>
            • Corpo docente especializado.
            <br />
            • Uso de plataformas digitais interativas.
            <br />
            • Abordagem prática e teórica balanceada.
          </Typography>
        </Box>

        {/* Botón Formulário de Inscrição */}
        <Box
          sx={{
            marginTop: '4rem',
            textAlign: 'center',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 'bold',
              textTransform: 'none',
              padding: '1rem 3rem',
              borderRadius: '25px',
              fontFamily: "'Poppins', sans-serif",
              transition: 'background 0.3s ease',
              outline: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              '&:focus': {
                outline: 'none', // Evita el borde azul
                boxShadow: 'none', // Evita el sombreado de enfoque
              },
            }}
            onClick={() => alert('Ir al Formulario de Inscripción')}
          >
            Formulário de Inscrição
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Capacitation;
