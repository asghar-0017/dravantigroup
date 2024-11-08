import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { Container, Typography, Box, Grid } from '@mui/material';
import groupgraph from '../../assets/images/groupgraph.png'

const MBMEgroupMembers = () => {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          MBME Group has unparalleled innovation, seamless solutions, and a commitment to excellence, ensuring your business stays ahead in the competitive digital landscape.
        </Typography>
      </Box>

      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h2">
          MBME Group by numbers
        </Typography>
      </Box>

      <Box my={4} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          Experience the impressive achievements of MBME Group:
        </Typography>
      </Box>

      <Box my={4}>

        {/* <Grid container spacing={4} mt={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <FaRegCheckCircle size={40} color="#3f51b5" />
              <Typography variant="h6" mt={2}>MBME Pay</Typography>
              <Typography variant="body2" color="textSecondary">
                A versatile payment services provider revolutionizing the industry with product aggregation services, payment channels, and gateways.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <FaRegCheckCircle size={40} color="#3f51b5" />
              <Typography variant="h6" mt={2}>MBME Neo</Typography>
              <Typography variant="body2" color="textSecondary">
                A groundbreaking digital banking initiative on a mission to establish new financial institutions and redefine the banking experience.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <FaRegCheckCircle size={40} color="#3f51b5" />
              <Typography variant="h6" mt={2}>MBME Services</Typography>
              <Typography variant="body2" color="textSecondary">
                At the forefront of innovation, MBME Wow Pay leads in proprietary financial technology, platforms, and government digital platforms.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <FaRegCheckCircle size={40} color="#3f51b5" />
              <Typography variant="h6" mt={2}>MBME Ventures</Typography>
              <Typography variant="body2" color="textSecondary">
                Focused on strategic investments and joint ventures to drive growth and innovation.
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
           <div className="MBMEgroup-ecosystem">
                <div className="MBMEgroup-icons">
                    <div className="MBMEgroup-icon-box">
                        <span className="text-content">
                        <FaRegCheckCircle className="icon" />
                            <p>High Transaction Volume: Successfully handling more than 90 million transactions, showcasing our robust and reliable systems.</p>
                        </span>
                    </div>
                    <div className="MBMEgroup-icon-box">
                            <FaRegCheckCircle className="icon" />
                        <div className="text-content">
                            <p className="title">MBME Neo</p>
                            <p>Extensive User Base: Serving more than 3.2 million users, demonstrating our widespread adoption and trust among customers.</p>
                        </div>
                    </div>
                    <div className="MBMEgroup-icon-box">
                        <FaRegCheckCircle className="icon" />
                        <div className="text-content">
                            <p className="title">MBME Services</p>
                            <p>
                            Significant Turnover: Achieving a remarkable turnover of more than 3 billion AED, reflecting our strong market presence and financial performance.</p>
                        </div>
                    </div>
                    <div className="MBMEgroup-icon-box">
                        <FaRegCheckCircle className="icon" />
                        <div className="text-content">
                            <p className="title">MBME Ventures</p>
                            <p>Diverse Client Portfolio: Catering to over 100 clients, including government, semi-government, and private sector entities, highlighting our versatility and broad reach.</p>
                        </div>
                    </div>
                </div>
            </div>
      </Box>

      
      <Box my={4} textAlign="center">
        <img src={groupgraph} alt="Group graph" style={{ width: '50%', maxHeight: '500px', objectFit: 'cover' }} />
      </Box>
    </Container>
  );
}

export default MBMEgroupMembers;
