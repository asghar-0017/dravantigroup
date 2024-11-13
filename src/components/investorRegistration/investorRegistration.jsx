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
import DravantiGold2 from "../../assets/images/dravanti-gold-2.png";

const InvestorRegistrationForm = () => {
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
        bgcolor: "#ffff",
        borderRadius: "25px",
        paddingBottom: 20,
        paddingTop: 10,
        width: "95%",
        marginBottom: "20px",
        marginTop: "100px"
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
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
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          > 
            <Box
              component="img"
              src={DravantiGold}
              alt="Dravanti Gold Logo 2"
              sx={{
                width: { xs: 100, sm: 120, md: 150, lg: 150 },
                height: { xs: 60, sm: 80, md: 100, lg: 100 },
                marginRight: 1,
              }}
              loading="lazy"
            />
            <Typography
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
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Investor Registration
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  borderRadius: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#ccc",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "2px",
                    backgroundColor: "#17A8E3",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -10px) scale(0.75)",
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              error={!!errors.email}
              helperText={
                errors.email
                  ? "This field is required. Please input a valid email"
                  : ""
              }
              {...register("email", { required: "Email is required" })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  borderRadius: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#ccc",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "2px",
                    backgroundColor: "#17A8E3",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -10px) scale(0.75)",
                },
              }}
            />
            <TextField
              fullWidth
              label="Please enter your referral code"
              variant="outlined"
              margin="normal"
              error={!!errors.referralCode}
              helperText={
                errors.referralCode
                  ? "This field is required. Please enter a text"
                  : ""
              }
              {...register("referralCode", {
                required: "Referral code is required",
              })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #ccc",
                  position: "relative",
                  borderRadius: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#ccc",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "2px",
                    backgroundColor: "#17A8E3",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -10px) scale(0.75)",
                },
              }}
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
                  "&:hover": {
                    backgroundColor: "#008FCA",
                  },
                }}
                className="dmSans"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InvestorRegistrationForm;
