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
          Contact
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
                loading="lazy"
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
                project, both directly and through the purchase of the Dravanti
                Tokens once launched. To discuss investment or pre-sale, please
                reach out to the team.
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
                  fontWeight: "300px",
                  lineHeight: "18px",
                }}
                className="roboto hover-target"
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
                Community
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#C2C2C2", fontSize: 16 }}
              >
                Our team maintain connections with multiple global communities
                in the DeFi and TradFi space. Please reach out to connect and
                learn more, or join us on any of our growing social media or
                direct contact channels.
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
                  fontWeight: "300px",
                  lineHeight: "18px",
                }}
                className="roboto hover-target"
              >
                info@dravantigroup.com
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
                Partnerships
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#C2C2C2", fontSize: 16 }}
              >
                Dravanti Middle East recognises the value and importance of
                partnerships to ensure the stability and scalability of its
                offering. Please reach out to the team to discuss any
                partnerships or support.
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
                  fontWeight: "300px",
                  lineHeight: "18px",
                }}
                className="roboto hover-target"
              >
                partners@dravantigroup.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
