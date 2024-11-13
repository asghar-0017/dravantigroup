import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DravantiTokenImg from "../../assets/images/dravanti-token.png";
import { useNavigate } from "react-router-dom";

const DravantiToken = () => {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: {
          md: "550px",
          sm: "600px",
          xs: "700px",
        },
        paddingBottom: "50px"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "30%",
          bgcolor: "#81A89F",
          margin:'8px'
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60%",
          bgcolor: "#F2F2F2",
        }}
      />

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          padding: { xs: 2, md: 4 },
          minHeight: "400px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Grid item>
          <Box
            component="img"
            src={DravantiTokenImg}
            alt="the dravanti token"
            loading="lazy"
            sx={{
              width: { xs: "60%", md: "60%" },
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: 2,
              position: "relative",
              top: "50px",
            }}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="h4"
            sx={{
              className:'average',
              fontSize:'40px',
              color: "#92BCB3",
              fontWeight: 600,
              mt: 2,
              position: "relative",
              top: "50px",
            }}
          >
            The Dravanti Token
          </Typography>
        </Grid>
            &nbsp;
        <Grid item>
          <Typography
          className="dmSans"
            variant="body"
            sx={{
              color: "#475355",
              maxWidth: "600px",
              mt: 2,
              mb: 3,
              position: "relative",
              top: "50px",
              fontSize:'17.63px',
              margin: 0.0001
            }}
          >
            The Dravanti Token is a multi-asset backed Security Token, with a
            1:1 wrap to allow its permissioned and seamless trade across
            multiple global Exchanges. Dravanti Middle East will offer a truly
            accessible Virtual Asset, backed by the Real World Assets liquidity
            traditionally associated to institutional funds and finance.
          </Typography>
        </Grid>
        &nbsp;

        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate("/about")}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "30px",
              paddingX: 3,
              height: "50px",
              position: "relative",
              top: "50px",
              transition: "all 0.3s ease",
              width: "150px",
              "&:hover": {
                backgroundColor: "#81A89F",
                transform: "scale(1.1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            className="roboto"
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DravantiToken;
