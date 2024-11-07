import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const TableSection = ({ content }) => (
  <Box sx={{ width: "98%", padding: { xs: 0, md: 0 }, mt: 15, mb: 5 }}>
    <Grid
      container
      spacing={3}
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {content.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          sx={{
            textAlign: "center",
            border: "2px solid #D9D9D9",
            borderBottom: "2px solid #D9D9D9",
            padding: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: "#5D6568", fontSize: 24, fontWeight: 300 }}>
            {item.heading}
          </Typography>
          <Typography variant="body1" sx={{color: "#7A7A7A", fontSize: 15, margin: "0px 0px 15px" }}>
            {item.paragraph}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
);

