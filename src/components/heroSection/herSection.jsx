import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";

const HeroSection = () => {
  const images = [Hero1, Hero2];

  const textSlides = [
    {
      text: "A Global and Accessible Real-World-Asset Offering.",
      subtext: "-Secure. Stable. Scalable.",
    },
    {
      text: "Welcome to Dravanti Middle East.",
      subtext: "-Building the Portfolio of the Future.",
    },
  ];

  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "ease-in-out",
  };

  const textSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    draggable: true,
    arrows: false,
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Slider {...imageSettings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          // bottom: "5%",
          // right: "5%",
          // width: { xs: "90%", sm: "70%", md: "60%" },
          bottom: { xs: "5%", sm: "20%", md: "4%", lg: "4%" },
          right: { xs: "5%", sm: "7%", md: "10%", lg: "5%" },
          width: { xs: "90%", sm: "70%", md: "80%", lg: "70%" },
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: 4,
          borderRadius: 2,
          cursor: "grab",
          height: {
            xs: "40vh", 
            sm: "50vh",  
            md: "33vw",
            lg: "27vw"
        },
        paddingTop: "60px",
        paddingLeft: { xs: "10px", sm: "20px", md: "60px", lg: "120px" },
        }}
      >
        <Slider {...textSettings}>
          {textSlides.map((slide, index) => (
            <Box key={index}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  paddingBottom: 1,
                  fontSize: { xs: "30px", sm: "35px", md: "45px" },
                  fontWeight: "light",
                  lineHeight: { xs: "30px", sm: "35px", md: "55px" },
                  width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
                }}
                className="exo"
              >
                {slide.text}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "25px", md: "45px" },
                  fontWeight: 600,
                  lineHeight: { xs: "30px", sm: "35px", md: "50px" },
                  width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
                }}
                className="exo"
              >
                {slide.subtext}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HeroSection;
