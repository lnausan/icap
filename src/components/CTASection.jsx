import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import CountUp from 'react-countup';
import backgroundImage from '../assets/images/about-us-bg.jpg';

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100vw', // Ocupa todo el ancho del navegador
        maxWidth: '100%', // Asegura que no haya desbordamiento
        minHeight: '100vh', // Altura mínima para cubrir la pantalla
        margin: 0,
        padding: '4rem 2rem', // Espaciado interno general
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        textAlign: 'center', // Texto centrado
        color: '#ffffff',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px', // Limita el ancho del contenido
          width: '100%',
          margin: '0 auto', // Centra horizontalmente el contenido
          padding: '4rem 2rem', // Espaciado interno
        }}
      >
        {/* Título principal */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '3rem', // Espaciado debajo del título
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          POR QUE INVESTIR EM SUA CARREIRA COM O ICAP?
        </Typography>

        {/* Benefícios principais */}
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <SchoolIcon sx={{ fontSize: '3rem', color: '#ffffff' }} />
              <Typography
                variant="h6"
                sx={{
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Certificação Reconhecida
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                Diploma valorizado no mercado.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <TrendingUpIcon sx={{ fontSize: '3rem', color: '#ffffff' }} />
              <Typography
                variant="h6"
                sx={{
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Educação de Qualidade
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                Conteúdo atualizado com as tendências mais recentes.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <GroupsIcon sx={{ fontSize: '3rem', color: '#ffffff' }} />
              <Typography
                variant="h6"
                sx={{
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Rede de Contatos
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                Conexão com professores e colegas altamente qualificados.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <StarIcon sx={{ fontSize: '3rem', color: '#ffffff' }} />
              <Typography
                variant="h6"
                sx={{
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Crescimento Pessoal e Profissional
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                Ferramentas para se destacar no mercado.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Números de impacto */}
        <Box sx={{ marginTop: '4rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Números de Impacto
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <CountUp start={0} end={95} suffix="%" duration={3} useEasing={false} />
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                de aprovação dos alunos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Grandes Instituições
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                Parcerias com grandes instituições de saúde.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <CountUp start={0} end={1000} duration={3} useEasing={false} />+ Horas
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#f0f0f0' }}>
                de aprendizado para garantir uma formação completa.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Botón de llamada a la acción */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '1rem 3rem',
            borderRadius: '25px',
            fontWeight: 'bold',
            textTransform: 'none',
            fontFamily: "'Poppins', sans-serif",
            marginTop: '6rem',
            transition: 'background 0.3s ease',
            '&:hover': {
              backgroundColor: '#333333',
            },
          }}
        >
          GARANTA SUA VAGA HOJE
        </Button>
      </Box>
    </Box>
  );
};

export default CTASection;
