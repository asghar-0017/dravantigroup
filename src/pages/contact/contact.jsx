import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import Img from "../../assets/images/community2.webp";
import { useForm } from "react-hook-form";
import ContactSection from "../../components/contact/contact";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          minHeight: "auto",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: { xs: "100%", md: "45%" },
            borderRadius: 2,
            margin: "auto",
            height: { xs: "400px", md: "auto" },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={Img}
            alt="Contact Us"
            sx={{
              width: "98.5%",
              height: { xs: "100%", md: "900px"},
              paddingTop: "10px",
              objectFit: "cover",
              paddingBottom: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            backgroundColor: "#262626",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "150px",
            lineHeight: "29.988px",
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              textAlign: "left",
              color: "#fff",
              lineHeight: "40px",
              fontSize: "30px",
              fontWeight: "600px",
            }}
            className="average"
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 4,
              textAlign: "left",
              color: "#7A7A7A",
              lineHeight: "23.324px",
              fontSize: "14px",
              fontWeight: "light",
            }}
            className="roboto"
          >
            Fill out the form and our team will get back soon.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                error={!!errors.name}
                helperText={
                  errors.name
                    ? "This field is required. Please input your Name"
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
                    color: "#7A7A7A",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#7A7A7A",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      backgroundColor: "#ccc",
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
                  "& .MuiInputLabel-root": {
                    color: "#7A7A7A",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "#7A7A7A",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                error={!!errors.email}
                helperText={
                  errors.email
                    ? "This field is required. Please enter your Email"
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
                    color: "#7A7A7A",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#7A7A7A",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      backgroundColor: "#ccc",
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
                  "& .MuiInputLabel-root": {
                    color: "#7A7A7A",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "#7A7A7A",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                margin="normal"
                error={!!errors.companyName}
                helperText={
                  errors.companyName
                    ? "This field is required. Please input your Company Name"
                    : ""
                }
                {...register("companyName", {
                  required: "Company Name is required",
                })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #ccc",
                    position: "relative",
                    borderRadius: 0,
                    color: "#7A7A7A",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#7A7A7A",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      backgroundColor: "#ccc",
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
                  "& .MuiInputLabel-root": {
                    color: "#7A7A7A",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "#7A7A7A",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                error={!!errors.message}
                multiline
                rows={6}
                helperText={
                  errors.message
                    ? "This field is required. Please input your Message"
                    : ""
                }
                {...register("message", { required: "Message is required" })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #7A7A7A",
                    position: "relative",
                    borderRadius: 0,
                    color: "#7A7A7A",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#7A7A7A",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      backgroundColor: "#ccc",
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
                  "& .MuiInputLabel-root": {
                    color: "#7A7A7A",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "#7A7A7A",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#121A1D",
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
              fullWidth
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      <ContactSection />
      <Box
        sx={{
          mt: 4,
          width: "100%",
          height: "600px",
          filter: "grayscale(100%)",
        }}
      >
        <iframe
          title="Grayscale Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115814.93972087467!2d55.17128!3d25.0657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4345117d8d29%3A0xf7f0f4b45115e276!2sDubai!5e0!3m2!1sen!2sae!4v1631114892287!5m2!1sen!2sae&style=element:geometry|color:0xf5f5f5&style=element:labels.icon|visibility:off&style=element:labels.text.fill|color:0x616161&style=element:labels.text.stroke|color:0xf5f5f5&style=feature:road|element:geometry|color:0xffffff&style=feature:water|element:geometry|color:0xc9c9c9"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
