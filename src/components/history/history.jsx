import React from "react";
import { useMediaQuery } from "@mui/material";
import DravantiLogo from "../../assets/images/logo3.webp"; // Update this path if needed

const History = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  return (
    <div
      style={{
        backgroundColor: "white", 
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: isSmallScreen ? "column" : "row",
          backgroundColor: "#325A74",
          color: "white",
          padding: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "38px",
          // maxWidth: "1400px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: isSmallScreen ? "3rem 0" : "6.3rem 0 5rem",
        }}
      >
        {/* Text Section */}
        <div
        className="average"
          style={{
            flex: 1,
            padding: isSmallScreen ? "10px 20px" : "20.001px",
            fontSize: isSmallScreen ? "16px" : isMediumScreen ? "20px" : "27px",
            lineHeight: isSmallScreen ? "1.5" : "1.6",
            fontWeight: "800",
            textAlign: isSmallScreen ? "center" : "left",
            maxWidth: "600px",
            color: "white",
            marginLeft: isSmallScreen ? "0" : "1rem",
          }}
        >
          Over the next 18 months Dravanti Middle East will scale to deliver one
          of the largest Real-World-Asset on-chain Portfolios in the world. This
          will be delivered through the stable and phased release of multiple
          liquid commodity assets, fully backed and owned by Inter-M Traders FZ
          LLE.
        </div>

        {/* Logo Section */}
        <div
          style={{
            flex: isSmallScreen ? "none" : "0 0 auto",
            padding: isSmallScreen ? "20px 0" : "0 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: isSmallScreen ? "20px" : "0",
          }}
        >
          <img
            src={DravantiLogo}
            alt="Dravanti Logo"
            style={{
              width: isSmallScreen ? "80px" : isMediumScreen ? "150px" : "280px",
              height: isSmallScreen ? "80px" : isMediumScreen ? "150px" : "274px",
              borderRadius: "50%", 
              backgroundColor: "#48776E",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
