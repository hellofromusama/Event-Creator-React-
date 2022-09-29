import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./assets/Event image.png";
import icon1 from "./assets/Fill 3.png";
import icon2 from "./assets/Fill 19.png";
import { useLocation } from "react-router-dom";
import { Box, Stack } from "@mui/system";

const Event = () => {
  const location = useLocation();
  //   const
  console.log(location, "location");
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        md={6}
        lg={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "64px", color: "#240D57" }}>
            {location.state.eventName}
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "#828282" }}>
            {location.state.hostName}
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <img src={icon2} />
              </Box>
              &nbsp; &nbsp; &nbsp;
              <Box>
                <Typography>{location.state.date} </Typography>
                <Typography>{location.state.date} </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <img src={icon1} />
              </Box>
              &nbsp; &nbsp; &nbsp;
              <Box>
                <Typography>{location.state.location} </Typography>
                <Typography>{location.state.location}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={6} lg={6}>
        <Box>
          <img src={image} alt="image" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Event;
