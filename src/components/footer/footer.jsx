import React from "react";
import "../../assets/style/footer.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

import logo from "../../assets/images/logo.png";

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const iconStyle = { width: "35px", height: "35px", color: "#ffff" };

  const iconStyleM = {
    fontSize: "35px", // Adjust font size to match other icons
    fontWeight: "bold",
    color: "#ffff", // Adjust color as needed
    textDecoration: "none",
  };
  return (
    <div style={{ width: "100%" }}>
      <footer className="footer">
        <div class="footer-container ">
          <div class="footer-section" style={{ width: "100%" }}>
            <img style={{ width: "80%" }} src={logo} alt="#" />
            <p className="roboto" style={{ paddingLeft: "15px" }}>
              Stay Updated With Our Latest Insights!
            </p>
            <TextField
              fullWidth
              label="Email"
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
                  borderBottom: "2px solid #868F91",
                  color: "#868F91",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                  color: "#868F91",
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
                  backgroundColor: "transparent",
                  color: "white",
                  paddingX: 4,
                  paddingY: 1,
                  fontSize: "14px",
                  border: "1px solid white",
                  "&:hover": {
                    backgroundColor: "#92BCB3",
                    color: "white",
                  },
                }}
                className="dmSans"
              >
                Send
              </Button>
            </Box>
          </div>
          <div class="footer-section subcat">
            <h1 className="dmSans" style={{ color: "white", fontSize: "22px" }}>
              Home
            </h1>
            <ul>
              <li className="hover-target">
                <Link to="/">Home</Link>
              </li>
              <li className="hover-target">
                <Link to="/about">Dravanti</Link>
              </li>
              <li className="hover-target">
                <Link to="/">Governance</Link>
              </li>
              <li className="hover-target">
                <Link to="/interMTraders">Partners</Link>
              </li>
              <li className="hover-target">
                <Link to="/team">Team</Link>
              </li>
              <li className="hover-target">
                <Link to="/#contact">Contact</Link>
              </li>
              <li className="hover-target">
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div class="footer-section subcat2">
            <h1 className="dmSans" style={{ color: "white", fontSize: "24px" }}>
              Visit Us
            </h1>
            <ul>
              <li
                style={{
                  letterSpacing: "0.37px",
                  lineHeight: "25px",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#868f91",
                }}
              >
                Dravanti Middle East <br /> Floor 11-47, Uptown Tower <br />{" "}
                Dubai Multi Commodities Centre <br /> Unite Arab Emirates
              </li>
              <li>
                <a
                  className="dmSans"
                  style={{
                    textDecoration: "none",
                    color: "#47776c",
                    fontSize: "17px",
                    fontWeight: "700",
                  }}
                  href="mailto:info@dravantigroup.com"
                >
                  info@dravantigroup.com
                </a>
              </li>
            </ul>
            <div className="footer-icon">
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target"
                >
                  <FaLinkedin style={iconStyle} />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target"
                >
                  <FaTelegram style={{ ...iconStyle, color: "#ffff" }} />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target"
                >
                  <FaTwitter style={{ ...iconStyle, color: "#ffff" }} />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="hover-target"
                >
                  <span style={iconStyleM}>M</span>
                </a>
              </div>
            </div>
            <div style={{ paddingLeft: "30px", paddingTop: "10px" }}>
              <h5>(Coming Soon)</h5>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div className="dmSans">
            &copy; All Rights Reserved. – Dravanti Middle East
          </div>
          <div className="footer-sub-bottom">
            <Link to="/privacy-policy" target="_self">
              Privacy Policy
            </Link>
            <Link to="/cookies-policy" target="_self">
              Cookies Policy
            </Link>
            <Link to="/terms-and-conditions" target="_self">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
