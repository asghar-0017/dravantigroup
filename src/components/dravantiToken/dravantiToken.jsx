import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DravantiTokenImg from "../../assets/images/dravanti-token.png";

const DravantiToken = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "550px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40%",
          bgcolor: "#81A89F",
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
              width: { xs: "60%", md: "50%" },
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: 2,
             position: "relative",
             top: "50px"
            }}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              mt: 2,
              position: "relative",
             top: "50px"
            }}
          >
            The Dravanti Token
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mt: 2,
              mb: 3,
              position: "relative",
             top: "50px"
            }}
          >
            The Dravanti Token is a multi-asset backed Security Token, with a
            1:1 wrap to allow its permissioned and seamless trade across
            multiple global Exchanges. Dravanti Middle East will offer a truly
            accessible Virtual Asset, backed by the Real World Assets liquidity
            traditionally associated to institutional funds and finance.
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => navigate("/about")}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              paddingX: 3,
              "&:hover": {
                backgroundColor: "#333",
              },
              position: "relative",
             top: "50px"
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DravantiToken;
