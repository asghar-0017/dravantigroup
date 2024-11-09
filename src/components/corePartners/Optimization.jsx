import React from "react";
import optimization from "../../assets/images/Optimization.png";
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
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  return (
    <section
      style={{
        padding: isSmallScreen ? "1rem" : "3rem",
      }}>
      <Grid
        container
        spacing={3}
        direction={
          isSmallScreen ? "column" : "row"
        }
        alignItems="center"
        justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={optimization}
            alt="City View"
            sx={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
              margin: isSmallScreen
                ? "0 auto"
                : "0",
              display: "block",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom>
            Oil and Gas Optimization
          </Typography>
          <Typography variant="body1" paragraph>
            We offer specialized optimization
            services for the oil and gas industry,
            replacing traditional methods with
            advanced technologies that enable
            faster decision-making and operational
            improvements.{" "}
            <a href="https://optioil-me.com/">
              Read more here
            </a>
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom>
            Commitment to Innovation
          </Typography>
          <Typography variant="body1" paragraph>
            At GDI, we are dedicated to continuous
            innovation and excellence. We
            constantly explore new technologies
            and methodologies to deliver the most
            advanced and effective solutions,
            empowering businesses and safeguarding
            their operations in an increasingly
            digital world.
          </Typography>

          <Box
            textAlign={
              isSmallScreen ? "center" : "left"
            }
            mt={4}>
            <a
              href="https://gdi-me.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  paddingX: 3,
                  paddingY: 1.5,
                  fontSize: isSmallScreen
                    ? "12px"
                    : "14px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}>
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
