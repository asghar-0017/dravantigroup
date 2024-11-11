import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { ClassNames } from '@emotion/react';

const TerritoriesCovered = () => {
  return (
    <Container>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h2" className='container' sx={{ fontWeight: '400', fontSize: { xs: '24px', sm: '30px' }}}>
          Territories Covered
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1">
          Today, our operations span the UAE, GCC, and MENA regions. We have
          recently expanded our services to the EU and USA, with ambitious plans
          to extend our reach into Southeast Asia.
        </Typography>
      </Box>

      {/* Grid layout for cards, 1 card per row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr', // Always 1 card per row
          gap: 2,
          width: '100%',
          maxWidth:'80%'
        }}
      >
        {/* Card 1 */}
        <Card sx={{ boxShadow: 7, borderRadius: '10px', boxShadow: '2px 3px 10px gray' }}>
          <CardContent sx={{ padding: '28px' }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
              Vision
            </Typography>
            <Typography variant="body" style={{ borderRadius: '2rem' }}>
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
        <Card sx={{ boxShadow: 7, borderRadius: '10px', boxShadow: '2px 3px 10px gray' }}>
          <CardContent sx={{ padding: '35px' }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
              Mission
            </Typography>
            <Typography variant="body">
              Our mission is to drive economic development in the UAE, GCC, and
              MENA regions, maximizing value for clients and shareholders alike.
              We are committed to leading the digital transformation of our
              industry, contributing to the prosperity and technological
              progress of the communities we serve.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card sx={{ boxShadow: 7, borderRadius: '10px', boxShadow: '2px 3px 10px gray' }}>
          <CardContent sx={{ padding: '35px' }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
              Values
            </Typography>
            <Typography variant="body">
              At MBME Group, our core values guide our actions and shape our
              identity, fostering a culture of excellence and integrity,
              Innovation, Teamwork, Respect, and Accountability.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default TerritoriesCovered;
