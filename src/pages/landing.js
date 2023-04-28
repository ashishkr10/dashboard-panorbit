import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg_img from "../assets/back.svg";
const Landing = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`./profile/${id}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
      }}
    >
      <Card
        sx={{
          width: 620,
          height: 660,
          borderRadius: 10,
          backgroundColor: "#F6F6F6",
          marginTop: 12,
        }}
      >
        <Box p={5}>
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            color="#5E5E5E"
          >
            Select an account
          </Typography>
        </Box>
        <Box>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              paddingBottom: "3rem",
              backgroundColor: "#FFF",
              borderBottomRadius: 10,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 490,
                paddingBottom: "2rem",
                overflowY: "scroll",
                scrollbarWidth: "thin",
              }}
            >
              {data.map((item, i) => (
                <Box
                  display="flex"
                  justifyItems="center"
                  flexDirection="row"
                  mx={6}
                  py={1}
                  sx={{
                    borderBottom: "1px solid #c5c5c5",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.setItem("id", i);
                    handleClick(i);
                  }}
                >
                  <Box mr={2}>
                    <Avatar
                      alt={item.name}
                      src={item.profilepicture}
                      sx={{ width: 46, height: 46 }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" color="#4A4A4A">
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default Landing;
