import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { Container, Typography, Box, Grid } from '@mui/material';
import groupgraph from '../../assets/images/groupgraph.png';

const data = [
  {
    description: "High Transaction Volume: Successfully handling more than 90 million transactions, showcasing our robust and reliable systems."
  },
  {
    description: "Extensive User Base: Serving more than 3.2 million users, demonstrating our widespread adoption and trust among customers."
  },
  {
    description: "Significant Turnover: Achieving a remarkable turnover of more than 3 billion AED, reflecting our strong market presence and financial performance."
  },
  {
    description: "Diverse Client Portfolio: Catering to over 100 clients, including government, semi-government, and private sector entities, highlighting our versatility and broad reach."
  }
];

const MBMEgroupMembers = () => {
  return (
    <Container maxWidth="lg" className='container'>
      {/* Intro text */}
      <Box my={4} className='average' textAlign="left" sx={{ paddingX: { xs: '1rem', sm: '2rem' } }}>
        <Typography variant="body1" color="textSecondary" sx={{ fontSize: { xs: '14px', sm: '15px' }, width:'100%', maxWidth:'80%'}}>
          MBME Group has unparalleled innovation, seamless solutions, and a commitment to excellence, ensuring your business stays ahead in the competitive digital landscape.
        </Typography>
      </Box>

      {/* Title */}
      <Box my={4} textAlign="left" className='dmSans' sx={{ paddingX: { xs: '1rem', sm: '2rem' } }}>
        <Typography variant="h4" component="h2" sx={{ fontSize: { xs: '24px', sm: '28px', md: '30px' }, fontWeight: 'normal', color:'#233032' }}>
          MBME Group by numbers
        </Typography>
      </Box>

      {/* Subtitle */}
      <Box my={4} textAlign="left" sx={{ paddingX: { xs: '1rem', sm: '2rem' } }}>
        <Typography variant="body1" color="textSecondary" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
          Experience the impressive achievements of MBME Group:
        </Typography>
      </Box>

      {/* Data grid */}
      <Grid container spacing={4} sx={{ paddingX: { xs: '1rem', sm: '3rem' } }} className='container'>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box display="flex" alignItems="flex-start" className='roboto container'>
              <FaRegCheckCircle 
                style={{ color: '#233032', fontSize: '3rem', marginRight: '8px' }} 
              />
              <Typography 
              className='roboto'
                variant="body1" 
                color="#7A7A7A" 
                lineHeight={2}

                sx={{ fontSize: { xs: '14px', sm: '15px' } }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Image */}
      <Box my={4} textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <img 
          src={groupgraph} 
          alt="Group graph" 
          style={{ 
            width: '100%', 
            maxWidth: '600px', 
            objectFit: 'cover', 
            marginTop: '1.5rem' 
          }} 
        />
      </Box>
    </Container>
  );
}

export default MBMEgroupMembers;
