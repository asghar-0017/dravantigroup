import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const UniqueSellingPositions = ({ title, subtitle, points }) => {
  return (
    <Box
      sx={{
        lineHeight: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: { xs: '1rem', sm: '2rem', md: '3.5rem' }, // Responsive left padding
        paddingRight: { xs: '1rem', sm: '2rem', md: '3.5rem' }, // Responsive right padding
      }}
    >
      <Typography
        className='dmSans container'
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'left',
          fontWeight: 'normal',
          marginBottom: '1rem',
          fontSize: { xs: '24px', sm: '28px', md: '30px' }, // Responsive font size
          color: '#233032',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        className='average'
        sx={{
          width:'100%',
          maxWidth:'89%',
          color:'#475355',
          lineHeight:1,
          fontWeight: 'normal',
          marginBottom: '1.5rem',
          textAlign: 'left',
          lineHeight:1.7,
          paddingLeft: { xs: '0.5rem', sm: '10px' }, // Responsive padding
          fontSize: { xs: '14px', sm: '15px' }, // Adjust font size for better readability
        }}
      >
        {subtitle}
      </Typography>

      <List sx={{ paddingLeft: { xs: '1rem', sm: '1.5rem' }, listStyleType: 'disc', pl: 0, m: 0 }}>
        {points.map((point, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'list-item',
              padding: '0',
              alignItems: 'flex-start',
              listStylePosition: 'outside',
              width:'100%',
              maxWidth:'80%'
              // paddingLeft: { xs: '1rem', sm: '2rem' }, // Responsive padding
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    display: 'block',
                    textAlign: 'left',
                    marginTop: '0.5rem',
                    fontSize: { xs: '14px', sm: '14px' }, // Font size adjustment
                  }}
                >
                  <strong>{point.title}</strong>: {point.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UniqueSellingPositions;
