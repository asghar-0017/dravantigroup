import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <CircularProgress sx={{ color: "#47776E" }} />
    </div>
  );
};

export default Loader;
