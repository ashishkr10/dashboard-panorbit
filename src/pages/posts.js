import { Box, Typography } from "@mui/material";
import React from "react";

const Posts = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Typography variant="h1" sx={{ color: "#EEEEEE", fontWeight: "bold" }}>
        Coming Soon
      </Typography>
    </Box>
  );
};

export default Posts;
