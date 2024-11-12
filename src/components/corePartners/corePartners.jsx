import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GDI from "../../assets/images/gdi.png"; 
import MBMI from "../../assets/images/mbme.png"; 
import INTERM from "../../assets/images/inter-m.png"; 
import { useNavigate } from 'react-router-dom';

const CorePartners = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', py: 5, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#474747', fontSize: 45, fontWeight: "300px", marginBottom: "100px" }}>
        Core Partners
      </Typography>

      <Grid container spacing={4} justifyContent="center" style={{borderBottom: "1px solid #ccc"}}>
      <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={INTERM}
            alt="Partner 3"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '300px', 
              m: '0 auto',
              cursor: "pointer"
            }}
            onClick={()=>navigate("/#")}
            className='hover-target'
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={MBMI}
            alt="Partner 2"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '300px', 
              m: '0 auto',
              cursor: "pointer"
            }}
            onClick={()=>navigate("/#")}
            className='hover-target'
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={GDI}
            alt="Partner 1"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxWidth: '300px',
              m: '0 auto',
              cursor: "pointer"
            }}
            onClick={()=>navigate("/#")}
            className='hover-target'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CorePartners;
