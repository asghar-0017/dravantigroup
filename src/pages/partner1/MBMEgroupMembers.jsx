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
    <Container maxWidth="lg"  className='container'>
      <Box my={4} textAlign="left">
        <Typography variant="body1" color="textSecondary">
          MBME Group has unparalleled innovation, seamless solutions, and a commitment to excellence, ensuring your business stays ahead in the competitive digital landscape.
        </Typography>
      </Box>

      <Box my={4} textAlign="left"  className='container'>
        <Typography variant="h4" component="h2">
          MBME Group by numbers
        </Typography>
      </Box>

      <Box my={4} textAlign="left"  className='container'>
        <Typography variant="body1" color="textSecondary">
          Experience the impressive achievements of MBME Group:
        </Typography>
      </Box>

      <Grid container spacing={4}  className='container'>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box display="flex" alignItems="flex-start">
              <FaRegCheckCircle 
              style={{ color: '#233032', fontSize: '2rem', marginRight: '8px' }} />
              <Typography variant="body1" color="textPrimary">
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

=      <Box my={4} textAlign="center"  className='container' justifyContent={'center'} alignItems={'center'} >
        <img src={groupgraph} alt="Group graph" style={{ width: '60%' , objectFit: 'cover' }} />
      </Box>
    </Container>
  );
}

export default MBMEgroupMembers;
