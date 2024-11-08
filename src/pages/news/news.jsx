import React from "react";
import BannerSection from "../../components/banner/banner";
import { Typography } from "@mui/material";

const News = () => {
  return (
    <div>
      <BannerSection
        pageName="News and Announcements"
        name="News and Announcements"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom fontSize={40} color="#1B7763">
          Coming Soon...
        </Typography>
      </div>
    </div>
  );
};

export default News;
