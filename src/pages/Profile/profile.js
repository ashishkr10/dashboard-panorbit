import React from "react";
import { useParams } from "react-router-dom";
import Map from "./map";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "#AAAAAA",
    textAlign: "right",
    padding: 2,
    fontSize: 20,
  },
  value: {
    color: "#545454",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20,
  },
});

const Profile = ({ data }) => {
  const classes = useStyles();
  const { id } = useParams();
  const item = data[id];
  return (
    <Box mt={3} p={2}>
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRight: "1px solid #c5c5c5",
            }}
          >
            <Box p={1}>
              <Avatar
                alt={item.name}
                src={item.profilepicture}
                sx={{ width: 225, height: 220 }}
              />
            </Box>
            <Box ml={-8}>
              <Typography variant="h5" className={classes.value}>
                {item.name}
              </Typography>
            </Box>
            <Box
              p={2}
              sx={{
                borderBottom: "1px solid #c5c5c5",
              }}
            >
              {/* Person */}
              <Grid container spacing={1} ml={-11}>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    Username :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.username}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    E-mail :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.email}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    Phone :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.phone}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    Website :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.website}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Company */}
            <Box p={2}>
              <Typography
                variant="h5"
                style={{
                  color: "#AAAAAA",
                  textAlign: "center",
                  padding: 6,
                  fontSize: 20,
                }}
                ml={-11}
              >
                Company
              </Typography>
              <Grid container spacing={1} ml={-11}>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    Name :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.company.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    catchPhrase :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.company.catchPhrase}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.text}>
                    bs :
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.value}>
                    {item.company.bs}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Address */}
        <Grid item xs={7}>
          <Box p={2}>
            <Typography variant="h5">
              <span style={{ color: "#AAAAAA", fontSize: 20 }}>Address: </span>
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Typography variant="h5" className={classes.text}>
                  Street :
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" className={classes.value}>
                  {item.address.street}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" className={classes.text}>
                  Suite :
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" className={classes.value}>
                  {item.address.suite}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" className={classes.text}>
                  City :
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" className={classes.value}>
                  {item.address.city}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" className={classes.text}>
                  Zipcode :
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" className={classes.value}>
                  {item.address.zipcode}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {/* Map */}
          <Box sx={{ width: "100%", height: "400px" }}>
            <Map item={data[id]} />
          </Box>
          <Box display="flex" justifyContent="flex-end" p={1}>
            <Box mr={2}>
              <Typography variant="body1" color="#545454">
                <span style={{ color: "#AAAAAA" }}>Lat : </span>
                {isNaN(item.address.geo.lat) ? "43.34" : item.address.geo.lat}
              </Typography>
            </Box>
            <Typography variant="body1" color="#545454">
              <span style={{ color: "#AAAAAA" }}>Long : </span>
              {isNaN(item.address.geo.lng) ? "43.34" : item.address.geo.lng}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
