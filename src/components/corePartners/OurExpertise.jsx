// ExpertiseSection.js
import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ExpertiseSection = () => {
  return (
    <Container maxWidth="md" sx={{ my: 8 }}>
     <Typography variant="h4" component="h2" gutterBottom>
        Our Expertise
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="flex-start">
              <CheckCircleIcon sx={{ fontSize: 30, mr: 2 }} />
              <Box>
                <Typography variant="h6" component="h3">
                  KYC Onboarding :
                </Typography>
                <Typography variant="body1">
                  GDI is at the forefront of face authentication technology, offering unparalleled accuracy and protection for applications across banking, government services, and corporate environments. Our solutions are designed to ensure secure and seamless user experiences while maintaining the highest standards of data privacy and protection. Some of our solutions include AI 3D Face Authentication, AI 3D Liveness Detection, AI OCR technology and more. Learn more here.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="flex-start">
              <CheckCircleIcon sx={{ fontSize: 30, color: 'black', mr: 2 }} />
              <Box>
                <Typography variant="h6" component="h3">
                  AML Services and Financial Solutions :
                </Typography>
                <Typography variant="body1">
                  In partnership with Dravanti, we provide cutting-edge Anti-Money Laundering (AML) services combined with innovative financial solutions. This powerful synergy enhances security and trust in digital transactions, helping businesses to meet regulatory requirements and safeguard their financial operations.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Longstanding Government Partnerships
        </Typography>
        <Typography variant="body1" paragraph>
          GDI has a distinguished track record of delivering bespoke software solutions for prominent government entities such as the Roads and Transport Authority (RTA) and Sharjah Municipality. Our solutions have spanned decades, reflecting our deep understanding of government needs and our commitment to addressing complex challenges with tailored, effective technology.
        </Typography>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Specialized Vertical Solutions
        </Typography>
        <Typography variant="body1" paragraph>
       <b> <i> Transport Management :</i></b> Our solutions in transport management optimize logistics and operations, improving efficiency and reducing costs in the transportation sector. Learn more here 
        </Typography>
        <Typography variant="body1" paragraph>
        <b><i>Manufacturing : </i></b> GDI offers tailored solutions to enhance manufacturing processes, from automation to quality control, ensuring greater productivity and operational excellence.
        </Typography>
        <Typography variant="body1" paragraph>
        <b> <i>Asset Management : </i></b> We provide advanced asset management solutions that help businesses effectively track, manage, and optimize their assets throughout their lifecycle.
        </Typography>
        <Typography variant="body1" paragraph>
        <b> <i>Waste Management : </i></b> Our waste management solutions streamline processes and improve efficiency, contributing to more sustainable and cost-effective waste handling practices.         </Typography>

      </Box>
    </Container>
  );
};

export default ExpertiseSection;
