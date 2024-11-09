import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const UniqueSellingPositions = ({ title, subtitle, points }) => {
    return (
      <Container maxWidth="lg" sx={{lineHeight: 1.6, justifyContent: 'center', marginRight:'3rem' }} className='container'>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
          {title}
        </Typography>
  
        <Typography variant="subtitle1" sx={{ fontWeight: 500, marginBottom: '1.5rem', textAlign: 'left' }}>
          {subtitle}
        </Typography>
  
        <List sx={{ paddingLeft: '1rem' }}>
          {points.map((point, index) => (
            <ListItem key={index} sx={{ alignItems: 'center', padding: '0' }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  marginRight: '0.5rem',
                  listStyleType: 'disc',
                  display: 'list-item',
                }}
              >
                {point.title}
              </Typography>
              <ListItemText secondary={point.description} />
            </ListItem>
          ))}
        </List>
      </Container>
    );
  };
  
  export default UniqueSellingPositions;