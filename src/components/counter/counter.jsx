import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const data = [
  { value: 25, label: "Billion in assets" },
  { value: 4, label: "Commodities and growing" },
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
    sx={{
      width: { xs: 230, sm: 300, md: 305 },
      height: { xs: 230, sm: 300, md: 305 },
      marginLeft:{xs:6},
      borderRadius: "50%",
      backgroundColor: "",
      border: "1px solid #3D5059",
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
      {value === 25 ? "$" : ""}
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
        backgroundColor: `#325A74`,
        py: 4,
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
      className="hover-target"
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CircleItem value={item.value} label={item.label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Counter;
