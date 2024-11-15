import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import GDI from "../../assets/images/gdi.png";
import MBMI from "../../assets/images/mbme.png";
import partner1 from '../../assets/images/partner1.webp';
import partner2 from '../../assets/images/partner2.webp';
import partner3 from '../../assets/images/partner3.webp';
import partner4 from '../../assets/images/partner4.webp';
import { useNavigate } from 'react-router-dom';

const CorePartners = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer && !isPaused) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', py: 8, textAlign: 'center', overflow: 'hidden' }}>
      <Box
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)} // Pause scrolling
        onMouseLeave={() => setIsPaused(false)} // Resume scrolling
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          borderBottom: "1px solid #ccc",
          gap: 4,
        }}
      >
        {[partner1, partner2, partner3, partner4, MBMI, GDI].map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Partner ${index + 1}`}
            sx={{
              width: '350px',
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
              flexShrink: 0,
              margin:'10px',
              padding:'20px',
              filter: 'grayscale(100%)', 
              // '&:hover': {
              //   filter: 'grayscale(0%)', // Remove grayscale on hover
              // },
            }}
            onClick={() => navigate("/#")}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CorePartners;
