import React from "react";
import { useMediaQuery } from "@mui/material";

const History = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const fontSize = isSmallScreen ? "20px" : isMediumScreen ? "30px" : "40px";

  const lineHeight = isSmallScreen ? "20px" : isMediumScreen ? "40px" : "50px";

  const paddingX = isSmallScreen || isMediumScreen ? "20px" : "100px";

  return (
    <p
      className="container"
      style={{
        color: "#92BCB3",
        fontSize: fontSize,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        fontStyle: "italic",
        lineHeight: lineHeight,
        marginTop: "50px",
        paddingRight: paddingX,
        paddingLeft: paddingX,
      }}
    >
      “Over the next 18 months Dravanti Middle East will scale to deliver one of
      the largest Real-World-Asset on-chain Portfolios in the world. This will
      be executed through the stable and phased release of liquid commodities,
      comprised of multiple assets, fully backed and owned by Inter-M Traders FZ
      LLE.”
    </p>
  );
};

export default History;
