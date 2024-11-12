import React from "react";
import "../../assets/style/footer.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import letter from "../../assets/images/letter.png";
import linkedin from "../../assets/images/linkedin.png";
import telegram from "../../assets/images/telegram.png";
import twitter from "../../assets/images/twitter.png";

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
  return (
    <div style={{ width: "100%" }}>
      <footer className="footer">
        <div class="footer-container container">
          <div class="footer-section" style={{ width: "100%" }}>
            <img style={{ width: "80%" }} src={logo} alt="#" />
            <p style={{ paddingLeft: "15px" }}>
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
                  borderBottom: "2px solid #ccc",
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                  color: "white",
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
                    backgroundColor: "#333",
                  },
                }}
                className="dmSans"
              >
                Send
              </Button>
            </Box>
          </div>
          <div class="footer-section subcat">
            <h1>Home</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Dravanti</Link>
              </li>
              <li>
                <Link to="/">Governance</Link>
              </li>
              <li>
                <Link to="/">Partners</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h1>Visit Us</h1>
            <ul>
              <li>
                Dravanti Middle East Floor 11-47, Uptown Tower Dubai Multi
                Commodities Centre Unite Arab Emirates
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#47776c" }}
                  href="mailto:info@dravantigroup.com"
                >
                  info@dravantigroup.com
                </a>
              </li>
            </ul>
            <div className="footer-icon">
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "35px" }} src={linkedin} alt="" />
                </a>
              </div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={letter} alt="" />
              </a>
            </div>
            <div style={{ paddingLeft: "30px", paddingTop: "10px" }}>
              <h5>(Coming Soon)</h5>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; All Rights Reserved. – Dravanti Middle East</div>
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
