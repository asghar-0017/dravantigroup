// ExpertiseSection.js
import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ExpertiseSection = () => {
  return (
    <Container maxWidth="md" sx={{ my: 8,paddingX: { xs: '2rem', md:'0.1rem' } }}>
     <Typography variant="h4" component="h2" gutterBottom className='dmSans' fontSize={'30px'} color='#233032'>
        Our Expertise
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="flex-start">
              <CheckCircleOutlineIcon sx={{ fontSize: 28, mr: 2 , color:'#233032' }} />
              <Box>
                <Typography variant="h6" component="h3" className='dmSans' fontSize={'20px'} color='#233032' textAlign={'left'}>
                  KYC Onboarding :
                </Typography>
                <Typography variant="body1" className='dmSans' color='#7A7A7A' fontSize={'14.3px'}  lineHeight={1.7}>
                  GDI is at the forefront of face authentication technology, offering unparalleled accuracy and protection for applications across banking, government services, and corporate environments. Our solutions are designed to ensure secure and seamless user experiences while maintaining the highest standards of data privacy and protection. Some of our solutions include AI 3D Face Authentication, AI 3D Liveness Detection, AI OCR technology and more. Learn more here.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="flex-start">
              <CheckCircleOutlineIcon sx={{ fontSize: 28, color: '', mr: 2 }} />
              <Box>
                <Typography variant="h6" component="h3" textAlign='left' className='dmSans'>
                  AML Services and Financial Solutions :
                </Typography>
                <Typography variant="body1" className='dmSans' color='#7A7A7A' fontSize={'14.3px'} lineHeight={1.7}>
                  In partnership with Dravanti, we provide cutting-edge Anti-Money Laundering (AML) services combined with innovative financial solutions. This powerful synergy enhances security and trust in digital transactions, helping businesses to meet regulatory requirements and safeguard their financial operations.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box 
      sx={{ mt: 8,paddingX: { xs: '1.2rem', md:'0.1rem' } }}
      >
        <Typography variant="h4" component="h2" className='dmSans' fontSize={'30px'} color='#233032' gutterBottom>
          Longstanding Government Partnerships
        </Typography>
        &nbsp;
        <Typography variant="body1" paragraph className='average' fontSize={'14px'} color='#475355' lineHeight={1.8}>
          GDI has a distinguished track record of delivering bespoke software solutions for prominent government entities such as the Roads and Transport Authority (RTA) and Sharjah Municipality. Our solutions have spanned decades, reflecting our deep understanding of government needs and our commitment to addressing complex challenges with tailored, effective technology.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 , paddingX: { xs: '1.2rem', md:'0.1rem' }}}>
        <Typography variant="h4" component="h2" gutterBottom className='dmSans' fontSize={'30px'} color='#233032'>
          Specialized Vertical Solutions
        </Typography>
        <Typography marginTop={'3rem'} className='average' fontSize={'15px'} color='#476355'>
        <Typography variant="body1" paragraph fontSize={'14.5px'}>
       <b> <i> Transport Management :</i></b> Our solutions in transport management optimize logistics and operations, improving efficiency and reducing costs in the transportation sector. Learn more here 
        </Typography>
        &nbsp;

        <Typography variant="body1" paragraph fontSize={'14.5px'}>
        <b><i>Manufacturing : </i></b> GDI offers tailored solutions to enhance manufacturing processes, from automation to quality control, ensuring greater productivity and operational excellence.
        </Typography>
        &nbsp;

        <Typography variant="body1" paragraph fontSize={'14.5px'}>
        <b> <i>Asset Management : </i></b> We provide advanced asset management solutions that help businesses effectively track, manage, and optimize their assets throughout their lifecycle.
        </Typography>
        &nbsp;

        <Typography variant="body1" paragraph fontSize={'14.5px'}>
        <b> <i>Waste Management : </i></b> Our waste management solutions streamline processes and improve efficiency, contributing to more sustainable and cost-effective waste handling practices.         </Typography>

        </Typography>
      </Box>
    </Container>
  );
};

export default ExpertiseSection;
