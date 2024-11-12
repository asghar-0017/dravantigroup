import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const TerritoriesCovered = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 } }}> {/* Outer padding for overall layout */}
      <Box sx={{ mb: 3, textAlign: 'left', ml: { xs: 0, sm: 4 } }}> {/* Left align with margin */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 400, 
            fontSize: { xs: '20px', sm: '24px', md: '30px' }, 
            color: '#233032',
            // marginLeft: { xs: '10px', sm: '20px', md: '30px' }  // Align text consistently
          }}
        >
          Territories Covered
        </Typography>
      </Box>
      
      <Box sx={{ mb: 4, textAlign: 'left', ml: { xs: '10px', sm: '20px', md: '30px' } }}> {/* Left aligned */}
        <Typography 
          variant="body1" 
          color="#475355" 
          fontSize={{ xs: '14px', sm: '15px', md: '14px' }}
          width={'100%'}
          maxWidth={'80%'}
        >
          Today, our operations span the UAE, GCC, and MENA regions. We have
          recently expanded our services to the EU and USA, with ambitious plans
          to extend our reach into Southeast Asia.
        </Typography>
      </Box>

      {/* Responsive layout for cards */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          width: { xs: '100%', sm: '90%', md: '80%' }, // Responsive width
          margin: { xs: '0 auto', sm: '0 auto', md: '1.3rem' }, // Responsive width
        }}
      >
        {/* Card 1 */}
        <Card 
          sx={{ 
            boxShadow: 3, 
            borderRadius: '10px', 
            height: 'auto', // Adjust to content height
            width: '100%', // Responsive width
            maxWidth: '910px', 
            padding: '20px', 
            textAlign: 'left',
            boxShadow:'3px 3px 20px gray'

          }}
        >
          <CardContent>
            <Typography variant="h6" component="h3" textAlign={'left'} sx={{ mb: 1 }}>
              Vision
            </Typography>
            <Typography variant="body2">
              Our vision is to establish a premier national and regional
              technology ecosystem, delivering unique, innovative, and
              high-quality products, services, and investment opportunities for
              our business partners. We aim to be at the forefront of
              technological advancement, setting new standards for excellence
              and innovation.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card 
          sx={{ 
            boxShadow: 3, 
            borderRadius: '10px', 
            height: 'auto', 
            width: '100%', 
            maxWidth: '910px', 
            padding: '20px', 
            textAlign: 'left',
            boxShadow:'3px 3px 20px gray'

          }}
        >
          <CardContent>
            <Typography variant="h6" component="h3"  textAlign={'left'}  sx={{ mb: 1 }}>
              Mission
            </Typography>
            <Typography variant="body2">
              Our mission is to drive economic development in the UAE, GCC, and
              MENA regions, maximizing value for clients and shareholders alike.
              We are committed to leading the digital transformation of our
              industry, contributing to the prosperity and technological
              progress of the communities we serve.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card 
          sx={{ 
            boxShadow: 3, 
            borderRadius: '10px', 
            height: 'auto', 
            width: '100%', 
            maxWidth: '910px', 
            padding: '20px', 
            textAlign: 'left',
            boxShadow:'3px 3px 20px gray'


          }}
        >
          <CardContent>
            <Typography variant="h6" component="h3"  textAlign={'left'}  sx={{ mb: 1 }}>
              Values
            </Typography>
            <Typography variant="body2">
              At MBME Group, our core values guide our actions and shape our
              identity, fostering a culture of excellence and integrity,
              Innovation, Teamwork, Respect, and Accountability.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TerritoriesCovered;
