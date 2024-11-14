import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import GDI from "../../assets/images/gdi.png";
import MBMI from "../../assets/images/mbme.png";
import INTERM from "../../assets/images/inter-m.png";
import { useNavigate } from 'react-router-dom';

import partner1 from '../../assets/images/partner1.webp'
import partner2 from '../../assets/images/partner2.webp'
import partner3 from '../../assets/images/partner3.webp'
import partner4 from '../../assets/images/partner4.webp'

const CorePartners = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    
    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
        
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 20); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', py: 8, textAlign: 'center', overflow: 'hidden' }}>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          borderBottom: "1px solid #ccc",
          gap: 4, 
        }}
      >
        <Box
          component="img"
          src={partner1}
          alt="Partner 3"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
        <Box
          component="img"
          src={partner2}
          alt="Partner 2"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
        <Box
          component="img"
          src={partner3}
          alt="Partner 1"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
        <Box
          component="img"
          src={partner4}
          alt="Partner 3 Duplicate"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
        <Box
          component="img"
          src={MBMI}
          alt="Partner 2 Duplicate"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
        <Box
          component="img"
          src={GDI}
          alt="Partner 1 Duplicate"
          sx={{
            width: '300px',
            height: 'auto',
            objectFit: 'contain',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={() => navigate("/#")}
        />
      </Box>
    </Box>
  );
};

export default CorePartners;
