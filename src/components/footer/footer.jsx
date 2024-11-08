

import React from 'react'
import '../../assets/style/footer.css'
import { useForm } from 'react-hook-form'; 

import logo from '../../assets/images/logo.png'
import letter from '../../assets/images/letter.png'
import linkedin from '../../assets/images/linkedin.png'
import telegram from '../../assets/images/telegram.png'
import twitter from '../../assets/images/twitter.png'

import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";

 const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div style={{width:'100%'}}>
         <footer className="footer">
    <div class="footer-container container">
      <div class="footer-section" style={{width:'100%'}}>
        <img style={{width:'80%'}} src={logo}  alt="#"/>  
        <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              error={!!errors.email}
              helperText={errors.email ? "This field is required. Please input a valid email " : ""}
              {...register("email", { required: "Email is required" })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "2px solid #ccc",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 14px) scale(1)",
                  color: "white",
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
      <div class="footer-section subcat" >
        <h1>Home</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dravanti</a></li>
          <li><a href="#">Governance</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h1>Visit Us</h1>
        <ul>
          <li>Dravanti Middle East
Floor 11-47, Uptown Tower
Dubai Multi Commodities Centre
Unite Arab Emirates</li>
          <li><a style={{ textDecoration: 'none', color: '#828c8f' }} href="mailto:info@dravantigroup.com">
              info@dravantigroup.com
            </a></li>
        </ul>
        <div className='footer-icon'>
         <div><a href="http://" target="_blank" rel="noopener noreferrer"><img style={{width:'35px'}} src={linkedin} alt="" /></a></div> 
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><img src={letter} alt="" /></a>
        </div>
        <div style={{paddingLeft:'30px',paddingTop:'10px'}}><h5>(Coming Soon)</h5></div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; All Rights Reserved. – Dravanti Middle East</div>
      <div className='footer-sub-bottom'>
        <a href="#" target="_blank">Privacy Policy</a>
        <a href="#" target="_blank">cookies Policy</a>
        <a href="#" target="_blank">Terms and condition</a>

      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer