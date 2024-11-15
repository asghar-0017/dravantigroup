import React from "react";
import { useMediaQuery } from "@mui/material";
import DravantiLogo from "../../assets/images/logo5.webp"; // Update this path if needed

const History2 = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        padding: "3.5rem 0",  
        marginBottom:'-3rem'
      }}
    >
      <div
        style={{
        //    marginLeft:'2rem', 
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
        //   padding: isSmallScreen ? "20px" : isMediumScreen ? "0px" : "0px",
          maxWidth: "1200px",
          width: "100%",
        //   color: "#474747", // Adjusting to dark gray for better readability as in the image
        }}
      >
        {/* Logo Section */}
        <div
        className="container"
          style={{
            // flex: "0 0 auto",
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-start",
            alignItems: "center",
            // marginBottom: isSmallScreen ? "20px" : "0",
            // marginRight: isSmallScreen ? "0" : "2rem",
          }}
        >
          <img
            src={DravantiLogo}
            alt="Dravanti Logo"
            style={{
              width: isSmallScreen ? "210px" : isMediumScreen ? "100px" : "508px",
              height: isSmallScreen ? "60px" : isMediumScreen ? "100px" : "177px",
              marginLeft: isSmallScreen ? "0px":'3rem'

            }}
          />
        </div>

        {/* Text Section */}
        <div
        className="average container"
          style={{
            // flex: 1,
            fontSize: isSmallScreen ? "14px" : isMediumScreen ? "16px" : "27.6px",
            lineHeight: isSmallScreen ? "1.6" : "1.7",
            fontWeight: "800",
            color: "#474747",
            maxWidth: "600px",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <p style={{ marginTop: "1rem", fontWeight: "800" }}>
            Over the next 18 months Dravanti Middle East will scale to deliver one
            of the largest Real-World-Asset on-chain Portfolios in the world.
            This will be delivered through the stable and phased release of
            multiple liquid commodity assets, fully backed and owned by Inter-M
            Traders FZ LLE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History2;
