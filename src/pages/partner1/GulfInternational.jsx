import gulftechnology from "../../assets/images/gulftechnology.png";
import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import ExpertiseSection from "../../components/corePartners/OurExpertise";
import OptimizationSection from "../../components/corePartners/Optimization";
import TrustedBy from "./TrustedBy";
import SubscribeForUpdates from "../../components/subscribeForUpdate/subscribeForUpdate";

const GulfInternational = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ pt:25}}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign={"center"}>
          Gulf Data International
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mt: 4 }}>
          Gulf Data International (GDI) is a
          leading technology company with over 40
          years of experience delivering
          innovative software solutions across
          various industries. As pioneers in the
          Middle East and North Africa (MENA)
          region, GDI excels in integrating
          advanced technologies that enhance
          security, streamline operations, and
          drive efficiency.
        </Typography>
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            alignItems="left">
            History
          </Typography>

          <Grid
            container
            spacing={2}
            alignItems="left">
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                paragraph
                align="left">
                Founded by Hamdi Atta in 1983, GDI
                started as a software solutions
                provider in an emerging market.
                From pioneering bespoke solutions
                for prominent banks and government
                entities in the UAE, we have grown
                into a leading IT solutions
                provider with offices in Abu
                Dhabi, Dubai, and Cairo. Our
                experienced team has successfully
                implemented hundreds of projects
                across the Middle East, offering
                expertise in systems integration,
                ERP, corporate performance
                management, and systems
                development.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={gulftechnology}
                alt="GDI Logo"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
        <ExpertiseSection />
        <OptimizationSection />
        <TrustedBy />
      </Container>
      <SubscribeForUpdates />
    </>
  );
};

export default GulfInternational;
