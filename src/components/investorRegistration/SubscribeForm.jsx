import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import DravantiGold from "../../assets/images/dravanti-gold-logo.png";
import DravantiGold2 from "../../assets/images/logo2.webp";

const SubscribeForUpdates = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        p: 4,
        bgcolor: "#253136",
        paddingBottom: 20,
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "#ffff", borderRadius: "20px", p: 3, width: "90%" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            component="img"
            src={DravantiGold2}
            alt="Dravanti Gold Logo"
            sx={{
              width: { xs: 70, sm: 100, md: 120, lg: 120 },
              height: { xs: 70, sm: 100, md: 120, lg: 120 },
              mb: 2,
            }}
            loading="lazy"
          />
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            {/* <Box
              component="img"
              src={DravantiGold}
              alt="Dravanti Gold Logo 2"
              sx={{
                width: { xs: 100, sm: 120, md: 150, lg: 150 },
                height: { xs: 60, sm: 80, md: 100, lg: 100 },
                marginRight: 1,
              }}
              loading="lazy"
            /> */}
            {/* <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              color="#253136"
              className="average"
              sx={{
                fontSize: { xs: 25, sm: 30, md: 45, lg: 50 },
                fontWeight: "bold",
                lineHeight: { xs: "30px", sm: "40px", md: "50px", lg: "55px" },
              }}
            >
              DRAVANTI
              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                textAlign="left"
                fontSize={{ xs: 20, sm: 24, md: 31, lg: 35 }}
                color="#253136"
                sx={{
                  lineHeight: {
                    xs: "24px",
                    sm: "32px",
                    md: "40px",
                    lg: "45px",
                  },
                }}
              >
                Middle East
              </Typography>
            </Typography> */}
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Subscribe for updates
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              error={!!errors.name}
              helperText={
                errors.name
                  ? "This field is required. Please input your name"
                  : ""
              }
              {...register("name", { required: "Name is required" })}
            />
            <TextField
              fullWidth
              label="Your email address"
              variant="outlined"
              margin="normal"
              type="email"
              error={!!errors.email}
              helperText={
                errors.email
                  ? "This field is required. Please input a valid email "
                  : ""
              }
              {...register("email", { required: "Email is required" })}
            />
            <Box textAlign="left" mt={2}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  paddingX: 3,
                  fontSize: "14px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#81A89F",
                  },
                  width: "100%",
                }}
                className="dmSans"
              >
                Send
              </Button>
            </Box>
            <Typography
            // className="roboto"
              sx={{ fontSize: 15, textAlign: "center", marginTop: "20px",color:'#475355' }}
            >
              Dravanti does not maintain a Newsletter, and will only send
              information on key announcements.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SubscribeForUpdates;
