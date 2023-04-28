import { Box, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
