import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GDI from "../../assets/images/gdi.png"; // Replace with your image path
import MBMI from "../../assets/images/mbme.png"; // Replace with your image path
import INTERM from "../../assets/images/inter-m.png"; // Replace with your image path

const CorePartners = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', py: 5, textAlign: 'center' }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#253136' }}>
        Core Partners
      </Typography>

      {/* Grid for images */}
      <Grid container spacing={4} justifyContent="center">
        {/* Partner 1 */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={GDI}
            alt="Partner 1"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '200px', // Ensure the image doesn't grow too large
              m: '0 auto',
            }}
          />
        </Grid>

        {/* Partner 2 */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={MBMI}
            alt="Partner 2"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '200px', // Ensure the image doesn't grow too large
              m: '0 auto',
            }}
          />
        </Grid>

        {/* Partner 3 */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={INTERM}
            alt="Partner 3"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '200px', // Ensure the image doesn't grow too large
              m: '0 auto',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CorePartners;
