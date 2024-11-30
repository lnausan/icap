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
      id="cta-section"
      component="section"
      sx={{
        width: '100vw',
        maxWidth: '100%',
        minHeight: '100vh',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        gap: '3rem',
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
          marginBottom: '2rem',
          lineHeight: { xs: '2.2rem', md: '2.8rem' }, // Mejor ajuste de altura
        }}
      >
        POR QUE INVESTIR EM SUA CARREIRA COM O ICAP?
      </Typography>

      {/* Benefícios principais */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Benefício 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '90%', // Asegura que no se desborde
              margin: '0 auto', // Centra los elementos
              gap: '0.5rem',
              padding: { xs: '0 1rem', sm: '0' },
            }}
          >
            <SchoolIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: '1.4',
                marginBottom: '0.5rem',
              }}
            >
              Certificação Reconhecida
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: '1.6',
              }}
            >
              Diploma valorizado no mercado.
            </Typography>
          </Box>
        </Grid>

        {/* Benefício 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              gap: '0.5rem',
              padding: { xs: '0 1rem', sm: '0' },
            }}
          >
            <TrendingUpIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: '1.4',
                marginBottom: '0.5rem',
              }}
            >
              Educação de Qualidade
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: '1.6',
              }}
            >
              Conteúdo atualizado com as tendências mais recentes.
            </Typography>
          </Box>
        </Grid>

        {/* Benefício 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              gap: '0.5rem',
              padding: { xs: '0 1rem', sm: '0' },
            }}
          >
            <GroupsIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: '1.4',
                marginBottom: '0.5rem',
              }}
            >
              Rede de Contatos
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: '1.6',
              }}
            >
              Conexão com professores e colegas altamente qualificados.
            </Typography>
          </Box>
        </Grid>

        {/* Benefício 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              gap: '0.5rem',
              padding: { xs: '0 1rem', sm: '0' },
            }}
          >
            <StarIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: '1.4',
                marginBottom: '0.5rem',
              }}
            >
              Crescimento Pessoal e Profissional
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: '1.6',
              }}
            >
              Ferramentas para se destacar no mercado.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Números de impacto */}
      <Box
        sx={{
          marginTop: '2rem',
          textAlign: 'center',
          gap: '1rem',
          maxWidth: '90%',
          margin: '0 auto',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              <CountUp start={0} end={95} suffix="%" duration={6} useEasing />
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              de aprovação dos alunos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Grandes Instituições
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Parcerias com grandes instituições de saúde.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              <CountUp start={0} end={1000} duration={6} useEasing />+ Horas
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              de aprendizado para garantir uma formação completa.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Botón */}
      <Button
        variant="contained"
        sx={{
          marginTop: '2rem',
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          '&:hover': {
            backgroundColor: '#333333',
          },
        }}
      >
        GARANTA SUA VAGA HOJE
      </Button>
    </Box>
  );
};

export default CTASection;
