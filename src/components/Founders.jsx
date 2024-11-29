import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Founders = () => {
  return (
    <Box sx={{ padding: 4, background: '#fff', textAlign: 'center' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            Name of the Founders
          </Typography>
          <Typography mt={2}>
            Estamos emocionados de presentar a los fundadores de nuestro...
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/path/to/founder-image.jpg"
            alt="Founders"
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Founders;
