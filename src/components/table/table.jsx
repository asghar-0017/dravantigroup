import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

// Define keyframes for hover animations
const styles = `
@keyframes planeMove {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@keyframes headingSlide {
  0% { transform: translateX(20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes paragraphSlide {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
`;

// Inject keyframes into the document
const StyleInjector = () => <style>{styles}</style>;

export const TableSection = ({ content }) => (
  <>
    <StyleInjector /> {/* Inject custom styles */}
    <Box
      sx={{
        width: "100%",
        padding: { xs: 2, md: 4 },
        mt: 5,
        mb: 5,
        backgroundColor: "#F1F9F9",
        marginBottom:'-0.1rem'

      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {content.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: 2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 1,
                border: "1px solid #E0E0E0",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s ease",
                "&:hover .planeIcon": {
                  animation: "planeMove 0.6s ease-in-out",
                },
                "&:hover .heading": {
                  animation: "headingSlide 0.6s forwards",
                },
                "&:hover .paragraph": {
                  animation: "paragraphSlide 0.6s forwards",
                },
              }}
            >
              <CardContent sx={{ width: "100%", paddingBottom: "16px !important" }}>
                <Box
                  className="planeIcon"
                  sx={{
                    fontSize: "40px",
                    color: "#4A707A",
                    mb: 2,
                    display: "inline-block",
                  }}
                >
                  🚀
                </Box>

                {/* Updated className to "heading" for animation */}
                <Typography
                  variant="h6"
                  className="heading"
                  sx={{
                    color: "#474747",
                    fontSize: { xs: "18px", md: "22px" },
                    mb: 1,
                  }}
                >
                  {item.heading}
                </Typography>

                <Typography
                  variant="body2"
                  className="paragraph"
                  sx={{
                    fontSize: { xs: "14px", md: "15px" },
                    color: "#474747",
                  }}
                >
                  {item.paragraph}
                </Typography>
              </CardContent>

              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#9E9E9E",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowForwardIos sx={{ fontSize: 16 }} />
                <ArrowForwardIos sx={{ fontSize: 16, ml: "-6px" }} />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);
