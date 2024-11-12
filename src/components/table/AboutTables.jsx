import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const AboutTable = ({ content }) => (
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
          sx={{

            textAlign: "center",
            border: "1px solid #7A7A7A",
            borderBottom: "2px solid #D9D9D9",
            padding: '10px 10px 10px 10px',
            height:'276px',
            width:'347px',
            minHeight:'auto',
            minWidth:'auto'


          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, color: "#465355", fontSize: 30, fontWeight: 300 }} className="average">
            {item.heading}
          </Typography>
          <Typography variant="body1" sx={{color: "#465355", fontSize: 18 , textAlign:'left', margin:'10px', lineHeight:1.6}} className="average">
            {item.paragraph}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
);

