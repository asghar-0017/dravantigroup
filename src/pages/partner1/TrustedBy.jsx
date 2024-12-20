import React from 'react';
import { Typography, Box, Container, Divider } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import slider4 from '../../assets/images/slider4.webp';
import slider5 from '../../assets/images/slider5.webp';
import slider6 from '../../assets/images/slider6.webp';
import slider7 from '../../assets/images/slider7.webp';
import slider8 from '../../assets/images/slider8.webp';
import slider9 from '../../assets/images/slider9.webp';
import slider10 from '../../assets/images/slider10.webp';

const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet size
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile size
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile size
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of logo images
  const logos = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
  ];

  return (
    <Box sx={{ py: { xs: 3, sm: 5 }}}>
      <Container maxWidth="md" sx={{ textAlign: { xs: 'left', sm: 'left' }, px: { xs: 2, sm: 0 } }}>
        <Typography variant="h4" gutterBottom className='dmsans' fontSize={'30px'} marginBottom={'2rem'}>
          Trusted by:
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ maxWidth: '980px' }} className='average' fontSize={'15px'}> 
          MBME Group’s diverse portfolio encompasses various entities across different regional sectors. Leveraging our advanced technology and extensive resources, we provide our clients and partners with a multitude of innovative and unique possibilities. We highly value the trust placed in us by our clients and take pride in delivering exceptional, high-quality services and products that are meticulously tailored to meet individual needs.
        </Typography>
      </Container>

      <Container maxWidth="10%" className='container'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box 
              key={index} 
              sx={{ 
                className:'container',
                // display: 'flex', 
                // justifyContent: 'left', 
                // alignItems: 'left',
                p: 4,
                position: 'relative',

              }}
            >
              {/* Left line for all items except the first */}
              {index > 0 && (
                <Divider
                className='container'
                  orientation="vertical" 
                  flexItem 
                  sx={{ 
                    position: 'absolute', 
                    left: 0, 
                    height: '80%', 
                    borderColor: 'rgba(0, 0, 0, 0.1)' 
                  }}
                />
              )}

              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                style={{
                  maxWidth: '100px', 
                  height: 'auto', 
                  objectFit: 'contain', 
                  margin: '0 auto',
                }} 
              />

              {/* Right line for all items except the last */}
              {index < logos.length - 1 && (
                <Divider 
                  orientation="vertical" 
                  flexItem 
                  sx={{ 
                    
                    position: 'absolute', 
                    right: 0, 
                    height: '100%', 
                    borderColor: 'rgba(0, 0, 0, 0.1)' 
                  }}
                />
              )}
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TrustedBy;
