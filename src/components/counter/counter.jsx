import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const data = [
  { value: 20, label: "Billion in assets" },
  { value: 3, label: "Commodities and growing" },
  { value: 5, label: "Partners" },
  { value: 250, label: "Combined years of experience" }
];

const AnimatedNumber = ({ targetValue }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  // useSpring to animate the count from 0 to the target value
  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? targetValue : 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref}>
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

const CircleItem = ({ value, label }) => (
  <Box
    sx={{
      width: { xs: 150, sm: 180, md: 200 },
      height: { xs: 150, sm: 180, md: 200 },
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#e0e0e0',
      textAlign: 'center',
    }}
  >
    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
      <AnimatedNumber targetValue={value} />+
    </Typography>
    <Typography variant="body1" component="div">
      {label}
    </Typography>
  </Box>
);

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#001E3C',
        py: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={isMobile ? 3 : 5}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((item, index) => (
          <Grid item key={index}>
            <CircleItem value={item.value} label={item.label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
