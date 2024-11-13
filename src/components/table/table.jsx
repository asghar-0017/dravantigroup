import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const TableSection = ({ content }) => (
  <Box sx={{ width: "100%", padding: { xs: 0, md: 0 }, mt: 15, mb: 5 }}>
    <Grid
      container
      spacing={3}
      sx={{
        // marginRight: "auto",
      }}
    >
      {content.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          className="dnSans"
          sx={{
            fontSize:'18px',
            textAlign: "center",
            border: "3px solid #D9D9D9",
            width:'340px',
            height:'280px',
            borderBottom: "2px solid #D9D9D9",
            padding: 2,
          }}
        >
          <Typography variant="h5" className="average" textAlign={'center'} sx={{ fontWeight: "bold", mb: 1, color: "#5D6568", fontSize: 24, fontWeight: 300 }}>
            {item.heading}
          </Typography>
          <Typography variant="body1" className="average" fontWeight={200} sx={{color: "#7A7A7A", fontSize: 15, margin:'1.5px'}}>
            {item.paragraph}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
)
