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
    <section>
      <Grid
        container
        spacing={0} // Remove space between image and text
        direction={isSmallScreen || isTabletScreen ? "column" : "row"}
        alignItems="flex-start" // Align text section with top of image
        justifyContent="center"
        sx={{ paddingX: { xs: '2rem', md:'0.1rem' } }}
      >
        {/* Image Section */}
        <Grid item xs={12} sm={8} md={3.6}>
          <Box
            component="img"
            src={optimization}
            alt="Optimization Image"
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "block",
              margin: isSmallScreen || isTabletScreen ? "0 auto" : "0",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} sm={6} md={7} sx={{ pl: { xs: 0, md: 2 } }}>
          <Typography
            variant="h4"
            component="h2"
            className="dmSans"
            fontSize="30px"
            color="#233032"
            gutterBottom
          >
            Oil and Gas Optimization
          </Typography>
          &nbsp;
          <Typography
            variant="body1"
            paragraph
            className="average"
            fontSize="14px"
            color="#475355"
          >
            We offer specialized optimization services for the oil and gas industry, replacing traditional methods with advanced technologies that enable faster decision-making and operational improvements.
           
            &nbsp;
            <Typography
              component="a"
              href="https://optioil-me.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#475455",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}Read more here
            </Typography>
            &nbsp;

          </Typography>

          <Typography
            variant="h4"
            component="h2"
            className="dmSans"
            fontSize="30px"
            color="#233032"
            gutterBottom
          >
            Commitment to Innovation

          </Typography>
          &nbsp;

          <Typography
            variant="body1"
            className="average"
            fontSize="14px"
            color="#475355"
            paragraph
          >
            At GDI, we are dedicated to continuous innovation and excellence. We constantly explore new technologies and methodologies to deliver the most advanced and effective solutions, empowering businesses and safeguarding their operations in an increasingly digital world.
          </Typography>
        </Grid>

        {/* Button Section */}
        <Box
          className="container"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            paddingLeft:{xs:'', sm:'9rem'},
            mt: 4,
            pr: { sm: "10rem" },
          }}
        >
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 30px",
              borderRadius: "20px",
              fontSize: "14px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                backgroundColor: "#F07D00",
                transform: "translateY(-2px) scale(1.05)",
              },
              "@media (max-width:600px)": {
                padding: "12px 35px",
                fontSize: "14px",
              },
            }}
          >
            Our Website
          </Button>
        </Box>
      </Grid>
    </section>
  );
};

export default OptimizationSection;
