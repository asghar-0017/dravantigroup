import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Nickel from "../../assets/images/nickel.png";
import Copper from "../../assets/images/copper.png";
import Gold from "../../assets/images/gold.png";

const DravantiMiddleEastLaunch = () => {
  const listStyle = {
    listStyleType: "disc",
    textAlign: "left",
    color: "#AEAEAE",
    fontSize: 18,
  };

  const sections = [
    {
      title: "Dravanti Middle East Launch",
      points: [
        "Dravanti Middle East will launch backed by ~$316m USD in Nickel assets.",
        "During the Token Generation Event, 300,000,000 million Tokens will be issued.",
        "The 1:1 ERC20 wrap will enable wide accessibility and utility of the Dravanti Token across multiple Exchanges.",
      ],
    },
    {
      title: "Multi-Asset Portfolio",
      points: [
        "Inter-M Traders FZ LLE will allocate further precious metals and commodities to the Dravanti portfolio every financial quarter.",
        "A new Minting will be conducted each quarter upon each asset allocation.",
        "Asset allocation will range from between $300m to $1Bn USD every three months, based on market sentiment.",
      ],
    },
    {
      title: "Scalability",
      points: [
        "The controlled release of assets and liquidity will ensure the stability of Total Token Supply.",
        "Controlled liquidity enhances the overall stability of the Dravanti portfolio, as a secure investment vehicle.",
        "Quarterly asset allocations and new Minting events further enable long-term and scalable investment.",
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 5, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} className="container">
      <Grid container justifyContent="center" spacing={2} sx={{ display: "flex", justifyContent: "space-evenly", width: "90%"}}>
        <Grid item>
          <Box
            component="img"
            src={Nickel}
            alt="Nickel"
            sx={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "2px",
              width: "300px",
              backgroundColor: "#D9D9D9",
              marginRight: -7,
              marginLeft: -5,
            }}
          />
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={Copper}
            alt="Copper"
            sx={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              height: "2px",
              width: "300px",
              backgroundColor: "#D9D9D9",
              marginRight: -7,
              marginLeft: -5,
            }}
          />
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={Gold}
            alt="Gold"
            sx={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                fontSize={18}
                textAlign={"left"}
                lineHeight="29.988px"
              >
                {section.title}
              </Typography>
              <Box sx={listStyle}>
                {section.points.map((point, idx) => (
                  <Typography variant="body1" key={idx} fontSize={18} color="#aeaeae" lineHeight="29.988px">
                    • {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DravantiMiddleEastLaunch;
