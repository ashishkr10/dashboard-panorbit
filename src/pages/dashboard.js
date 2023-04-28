import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Dashboard = ({ children, data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeUser = data[localStorage.getItem("id")];
  const key = location.pathname;

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const items = [
    {
      path: `/profile/${localStorage.getItem("id")}`,

      title: "Profile",
    },
    {
      path: "/posts",
      title: "Posts",
    },
    {
      path: "/gallary",
      title: "Gallery",
    },
    {
      path: "/todo",
      title: "Todo",
    },
  ];
  return (
    <Grid container sx={{ height: "100vh" }} p={2}>
      <Grid item lg={3}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Sidebar */}
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0rem 3rem",
              width: "100%",
              height: 900,
              backgroundColor: "#4351C8",
              borderRadius: 7,
            }}
            elevation={0}
          >
            {items.map((item) => (
              <>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    margin: "1.2rem 0rem",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(item.path)}
                  elevation={0}
                >
                  <Box
                    sx={{
                      marginLeft: 4,
                    }}
                    flexGrow={1}
                  >
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{
                        color: key === item.path ? "#fff" : "#A0A0E2",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: 30,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: key === item.path ? "#fff" : "#4351C8",
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,
                    }}
                  >
                    {key === item.path && (
                      <KeyboardArrowRightIcon fontSize="large" />
                    )}
                  </Box>
                </Card>
                <Divider style={{ width: "80%", backgroundColor: "#A4A6E4" }} />
              </>
            ))}
          </Paper>
        </Box>
      </Grid>

      {/* Header */}
      <Grid item lg={9}>
        <Box
          sx={{
            marginTop: "2rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box flexGrow={1}>
            <Typography
              variant="h5"
              align="left"
              fontWeight="bold"
              color="#545454"
            >
              {items.filter((x) => x.path === key)[0]["title"]}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ p: 0, textTransform: "none" }}
            >
              <Box mr={2}>
                <Avatar
                  alt={activeUser.name}
                  src={activeUser.profilepicture}
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
                <Typography variant="h6" color="#545454">
                  {activeUser.name}
                </Typography>
              </Box>
            </Button>

            {/* Dashboard Profile */}
            <Menu
              sx={{ mt: "50px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                style: {
                  borderRadius: 24,
                },
              }}
            >
              <MenuItem>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  p={2}
                  sx={{
                    height: 250,
                    width: 250,
                  }}
                >
                  <Avatar
                    alt={activeUser.name}
                    src={activeUser.profilepicture}
                    sx={{ width: 95, height: 90 }}
                  />
                  <Box p={0.3}>
                    <Typography variant="h6" color="#545454">
                      {activeUser.name}
                    </Typography>
                  </Box>
                  <Box p={0.3}>
                    <Typography variant="h6" color="#AAAAAA">
                      {activeUser.email}
                    </Typography>
                  </Box>
                  <Box p={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#D55151",
                        textTransform: "none",
                        borderRadius: 6,
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "#D55151",
                        },
                      }}
                      onClick={() => navigate("/")}
                    >
                      <Typography variant="h6">Sign out</Typography>
                    </Button>
                  </Box>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Pages Render */}
        <Box
          mt={2}
          sx={{
            borderTop: "1px solid #c5c5c5",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
