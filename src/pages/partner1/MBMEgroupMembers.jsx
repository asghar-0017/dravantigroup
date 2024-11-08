import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { Container, Typography, Box, Grid } from '@mui/material';
import groupgraph from '../../assets/images/groupgraph.png'


const data = [
    {
      title: "",
      description: "High Transaction Volume: Successfully handling more than 90 million transactions, showcasing our robust and reliable systems."
    },
    {
      title: "",
      description: "Extensive User Base: Serving more than 3.2 million users, demonstrating our widespread adoption and trust among customers."
    },
    {
      title: "",
      description: "Significant Turnover: Achieving a remarkable turnover of more than 3 billion AED, reflecting our strong market presence and financial performance."
    },
    {
      title: "",
      description: "Diverse Client Portfolio: Catering to over 100 clients, including government, semi-government, and private sector entities, highlighting our versatility and broad reach."
    }
  ];

const MBMEgroupMembers = () => {
  return (
    <Container>
      <Box my={4} textAlign="left">
        <Typography variant="body1" color="textSecondary">
          MBME Group has unparalleled innovation, seamless solutions, and a commitment to excellence, ensuring your business stays ahead in the competitive digital landscape.
        </Typography>
      </Box>

      <Box my={4} textAlign="left">
        <Typography variant="h4" component="h2">
          MBME Group by numbers
        </Typography>
      </Box>

      <Box my={4} textAlign="left">
        <Typography variant="body1" color="textSecondary">
          Experience the impressive achievements of MBME Group:
        </Typography>
      </Box>

      <Box my={4}>

           {/* <div className="MBMEgroup-ecosystem">
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
            </div> */}

<div className="MBMEgroup-icons">
          {data.map((item, index) => (
            <div className="MBMEgroup-icon-box" key={index}>
              <span className="icon-title">
                <span>
                  <FaRegCheckCircle className="icon" />
                </span>
                <p className="title">{item.title}</p>
              </span>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </Box>

      
      <Box my={4} textAlign="center">
        <img src={groupgraph} alt="Group graph" style={{ width: '50%', maxHeight: '500px', objectFit: 'cover' }} />
      </Box>
    </Container>
  );
}

export default MBMEgroupMembers;
