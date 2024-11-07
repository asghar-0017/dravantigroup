import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';

const InvestorRegistrationForm = () => {
  return (
    <Container maxWidth="md" sx={{ p: 4, bgcolor: '#f8f8f8', borderRadius: '8px' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side: Logo and Company Name */}
        <Grid item xs={12} md={5} display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            src="path/to/logo.png"  // Replace with your logo path
            alt="Logo"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h5" align="center" fontWeight="bold">
            DRAVANTI <br /> Middle East
          </Typography>
        </Grid>

        {/* Right Side: Form */}
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Investor Registration
            </Typography>
          </Box>

          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Please enter your referral code"
              variant="outlined"
              margin="normal"
            />

            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="primary" size="large">
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InvestorRegistrationForm;
