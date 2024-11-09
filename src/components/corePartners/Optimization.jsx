import React from 'react';
import optimization from '../../assets/images/Optimization.webp'
import {  Button, Box } from "@mui/material";

const OptimizationSection = () => {
    return (
        <section style={{ display: 'flex', alignItems: 'left', padding: '' }}>
            <div style={{ flex: 1 }}>
                <img 
                    src={optimization} 
                    alt="City View" 
                    style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }}
                />
            </div>
            <div style={{ flex: 1 ,alignItems:'left', marginRight:'9rem'}}>
                <h2>Oil and Gas Optimization</h2>
                <p>
                    We offer specialized optimization services for the oil and gas industry, 
                    replacing traditional methods with advanced technologies that enable faster 
                    decision-making and operational improvements. <a href="https://optioil-me.com/">Read more here</a>
                </p>
                <h2>Commitment to Innovation</h2>
                <p>
                    At GDI, we are dedicated to continuous innovation and excellence. We constantly explore 
                    new technologies and methodologies to deliver the most advanced and effective solutions, 
                    empowering businesses and safeguarding their operations in an increasingly digital world.
                </p>
                <Box textAlign="center" mt={4}>
      <a href="https://gdi-me.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <Button
      variant="contained"
      type="submit"
      sx={{
        backgroundColor: "black",
        color: "white",
        paddingX: 3,
        paddingY: 1.5,
        fontSize: "14px",
        borderRadius: '20px',
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
      className="dmSans"
    >
      Our website
    </Button>
  </a>
</Box>
            </div>
        </section>
    );
};

export default OptimizationSection;
