import React from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  backgroundColor: '#f5f5f5',
  borderRadius: '20px',
  padding: '40px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  marginTop: '50px',
});

const SubscribeForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1f2933',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <StyledContainer>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Logo as an Image */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/path/to/your/logo.png" // Replace with your image path
              alt="Logo"
              style={{ width: '80px', height: '80px', borderRadius: '50%' }}
            />
          </Grid>

          {/* Right side - Form */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Subscribe for updates
            </Typography>
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              variant="outlined"
              label="Your email address"
              fullWidth
              sx={{ marginBottom: '20px' }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1f2933',
                color: 'white',
                borderRadius: '50px',
                width: '100%',
                padding: '10px 0',
                fontSize: '16px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1b232a',
                },
              }}
            >
              Send
            </Button>
            <Typography
              variant="body2"
              sx={{
                marginTop: '15px',
                color: '#6b7280',
                fontSize: '14px',
              }}
            >
              Dravanti does not maintain a Newsletter, and will only send information on key announcements.
            </Typography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default SubscribeForm;
