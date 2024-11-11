import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const UniqueSellingPositions = ({ title, subtitle, points }) => {
  return (
    <Box
      sx={{
        lineHeight: 1.6,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '3rem',
        paddingLeft: '2rem', // Adjust this for how far you want the content from the left
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: { xs: 'left', sm: 'left' },
          fontWeight: 'normal',
          marginBottom: '1rem',
          fontSize: '1.8rem',
          color: 'black',
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontWeight: 'normal',
          marginBottom: '1.5rem',
          textAlign: { xs: 'center', sm: 'left' },
          paddingLeft: '10px',
        }}
      >
        {subtitle}
      </Typography>

      <List sx={{ paddingLeft: '1rem', listStyleType: 'disc' }}>
        {points.map((point, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'list-item',
              padding: '0',
              alignItems: 'flex-start',
              listStylePosition: 'outside', // Ensures bullet points are outside the text
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    display: 'block',
                    textAlign: { xs: 'center', sm: 'left' },
                    marginTop: '0.5rem',
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
