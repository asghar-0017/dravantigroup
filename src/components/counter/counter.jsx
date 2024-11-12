import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const data = [
  { value: 20, label: "Billion in assets" },
  { value: 3, label: "Commodities and growing" },
  { value: 5, label: "Partners" },
  { value: 250, label: "Combined years of experience" },
];

const AnimatedNumber = ({ targetValue }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? targetValue : 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div ref={ref} className="dmSans">
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

const CircleItem = ({ value, label }) => (
  <Box
  className='hover-target'
    sx={{
      width: { xs: 250, sm: 300, md: 300 },
      height: { xs: 250, sm: 300, md: 300 },
      borderRadius: "50%",
      backgroundColor: "",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#e0e0e0",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      component="div"
      color="#DBE8E8"
      fontSize={46}
      className="dmSans"
      sx={{ fontWeight: "bold", display: "flex", flexDirection: "row" }}
    >
      {value == 20 ? "$" : ""}
      <AnimatedNumber targetValue={value} />
      &nbsp;+
    </Typography>
    <Typography
      variant="body1"
      component="div"
      color="#DBE8E8"
      fontSize={30}
      className="dmSans"
    >
      {label}
    </Typography>
  </Box>
);

const Counter = ({ bg }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: `#${bg}`,
        py: 5,
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((item, index) => (
          <Grid item key={index}>
            <CircleItem value={item.value} label={item.label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Counter;
