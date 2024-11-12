import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import BackgroundImage from "../../assets/images/banner.jpg";
import { FaGreaterThan } from "react-icons/fa6";

const BannerSection = ({name, pageName}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '50vh', sm: '60vh', md: '90vh' },
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '24px', sm: '36px', md: '50px' },
            mb: 2,
            color: "#DBE8E8",
          }}
          className='dmSans'
        >
          {name}
        </Typography>

        <Breadcrumbs
          separator={<FaGreaterThan fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            justifyContent: 'center',
            display: 'flex',
            color: 'white',
            fontSize: { xs: '14px', sm: '16px' },
          }}
          className='dmSans'
        >
          <Link underline="hover" color="inherit" href="/" sx={{ color: '#868F91' }} className='dmSans'>
            Home
          </Link>
          <Typography className='dmSans' color="white">{pageName}</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default BannerSection;
