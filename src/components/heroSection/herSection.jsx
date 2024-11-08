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
            {" "}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Slider>

      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "5%",
          width: { xs: "90%", sm: "70%", md: "55%" },
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: 4,
          borderRadius: 2,
          cursor: "grab",
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
                }}
              >
                {slide.text}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "25px", md: "35px" },
                }}
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
