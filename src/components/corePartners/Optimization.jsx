import React from "react";
import optimization from "../../assets/images/optimization.png";
import {
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const OptimizationSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section
      style={{
        padding: isSmallScreen ? "1rem" : "3rem", // Adjust padding for different screen sizes
      }}
    >
      <Grid
        container
        spacing={3}
        direction={isSmallScreen || isTabletScreen ? "column" : "row"} // Column layout for small screens and tablets, row for larger
        alignItems="center"
        justifyContent="center"
      >
        {/* Image Section */}
        <Grid item xs={12} sm={8} md={4}>
          <Box
            component="img"
            src={optimization}
            alt="Optimization Image"
            sx={{
              width: "100%",
              maxWidth: "500px", // Optional: to control max image size
              borderRadius: "8px",
              margin: isSmallScreen || isTabletScreen ? "0 auto" : "0", // Center image on small screens and tablets
              display: "block",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} sm={4} md={8}>
          <Typography variant="h4" component="h2" style={{ width: "100%" }} gutterBottom>
            Oil and Gas Optimization
          </Typography>
          <Typography variant="body1" paragraph>
            We offer specialized optimization services for the oil and gas industry, replacing traditional methods with advanced technologies that enable faster decision-making and operational improvements.{" "}
            <a href="https://optioil-me.com/">Read more here</a>
          </Typography>

          <Typography variant="h4" component="h2" gutterBottom>
            Commitment to Innovation
          </Typography>
          <Typography variant="body1" paragraph>
            At GDI, we are dedicated to continuous innovation and excellence. We constantly explore new technologies and methodologies to deliver the most advanced and effective solutions, empowering businesses and safeguarding their operations in an increasingly digital world.
          </Typography>

          <Box textAlign={isSmallScreen || isTabletScreen ? "center" : "left"} mt={4}>
            <a
              href="https://gdi-me.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  paddingX: 3,
                  paddingY: 1.5,
                  fontSize: isSmallScreen ? "12px" : "14px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Our website
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default OptimizationSection;
