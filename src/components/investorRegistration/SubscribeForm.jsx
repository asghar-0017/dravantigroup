import React from 'react';
import { Box, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

import logo from '../../assets/images/logo2.webp';

const StyledContainer = styled(Container)({
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '30px ',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  // width:'100%',
  maxWidth: '800px',
  margin:'3rem 1rem 9.5rem 1rem',
});

const SubscribeForm = () => {
  return (
    <Box
      sx={{
        width:"100%",
        backgroundColor: '#253136',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'2rem'

      }}
    >
      <StyledContainer>
        <Grid container spacing={12} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '118px', height: '118px', borderRadius: '50%' }}
            />
          </Grid>

          {/* Right side - Form */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              sx={{ fontWeight: '600', marginBottom: '20px', color: '#253136', fontSize: '30px', textAlign:'center' }}
            >
              Subscribe for updates
            </Typography>

            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              sx={{
                maxWidth: '698px',
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />

            <TextField
              variant="outlined"
              label="Your email address"
              fullWidth
              sx={{
                maxWidth: '698px',
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#1f2933',
                color: 'white',
                borderRadius: '50px',
                padding: '10px 0',
                fontSize: '16px',
                textTransform: 'none',
                maxWidth: '698px',
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
                color: '#475355',
                fontSize: '14px',
                maxWidth: '698px',
                fontStyle:'italic',
                textAlign:'center'
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
