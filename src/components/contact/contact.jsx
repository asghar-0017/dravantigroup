import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Investment from "../../assets/images/investment.webp";
import Community from "../../assets/images/community.webp";
import Partnership from "../../assets/images/partnership.webp";

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: "#0E2841", py: 6 }} id="contact">
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 6, color: "#E7E9E9", fontSize: 45 }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={Investment}
                alt="Investment Icon"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  objectFit: "cover",
                  mb: 2,
                  border: "2px solid #92BCB3",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1, color: "#DBE8E8", fontSize: 24 }}
              >
                Investment
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#C2C2C2", fontSize: 16 }}
              >
                There are multiple avenues to invest in the Dravanti Middle East
                project, both directly and through the purchase of Dravanti
                Tokens once launched.
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:investments@dravantigroup.com"
                onClick={() =>
                  (window.location.href =
                    "mailto:investments@dravantigroup.com")
                }
                sx={{
                  color: "#DBE8E8",
                  fontSize: 18,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                investments@dravantigroup.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ mt: { xs: 0, sm: 4 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={Community}
                alt="Partnerships Icon"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  objectFit: "cover",
                  mb: 2,
                  border: "2px solid #92BCB3",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1, color: "#DBE8E8", fontSize: 24 }}
              >
                Partnerships
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#C2C2C2", fontSize: 16 }}
              >
                Dravanti Middle East welcomes partnerships with stakeholders in
                the energy and commodities sectors to drive mutual growth.
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:partnerships@dravantigroup.com"
                onClick={() =>
                  (window.location.href =
                    "mailto:partnerships@dravantigroup.com")
                }
                sx={{
                  color: "#DBE8E8",
                  fontSize: 18,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                partnerships@dravantigroup.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={Partnership}
                alt="Support Icon"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  objectFit: "cover",
                  mb: 2,
                  border: "2px solid #92BCB3",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1, color: "#DBE8E8", fontSize: 24 }}
              >
                Support
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#C2C2C2", fontSize: 16 }}
              >
                For inquiries or support, our team is available to assist you
                with any questions regarding Dravanti Middle East.
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:support@dravantigroup.com"
                onClick={() =>
                  (window.location.href = "mailto:support@dravantigroup.com")
                }
                sx={{
                  color: "#DBE8E8",
                  fontSize: 18,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                support@dravantigroup.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
