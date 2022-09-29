import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./assets/image 1.png";
import { useNavigate } from "react-router-dom";
console.log(image, "image");

const Home = () => {
  const navigate = useNavigate();
  const buttonEventHandler = () => {
    navigate("/create");
  };

  return (
    <Grid container>
      <Grid item md={6} lg={6}>
        <img src={image} alt="image" />
      </Grid>

      <Grid item md={6} lg={6} sx={{ align: "right" }}>
        <Typography sx={{ fontSize: "64px", color: "#240D57" }}>
          Imagine
        </Typography>
        <Typography sx={{ fontSize: "64px", color: "#8456EC" }}>
          Snapchat{" "}
        </Typography>
        <Typography sx={{ fontSize: "64px", color: "#240D57" }}>
          had events
        </Typography>
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Easily host and share events with your friends across any social media
        </Typography>
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            gap: "10px",
            color: "white",
            // position: "absolute",
            width: "320px",
            height: "55px",
            // left: calc("50"% - 320px/2 + 436px);

            background: "#8456EC",
            borderRadius: "10px",
          }}
          onClick={buttonEventHandler}
        >
          Create my event
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
