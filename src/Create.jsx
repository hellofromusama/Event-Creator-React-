import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const buttonEventHandler = () => {
    navigate("/create");
  };

  const nextpageDataHandler = () => {
    navigate("/event", {
      state: {
        eventName,
        hostName,
        date,
        location,
      },
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6} lg={6} sx={{ align: "right" }}>
        <Typography sx={{ fontSize: "64px", color: "#240D57" }}>
          Imagine
        </Typography>
        <Typography sx={{ fontSize: "64px", color: "#8456EC" }}>
          Snapchat
        </Typography>
        <Typography sx={{ fontSize: "64px", color: "#240D57" }}>
          had events
        </Typography>
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Easily host and share events with your friends across any social media
        </Typography>
      </Grid>

      <Grid item md={6} lg={6}>
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Add Event
        </Typography>
        <TextField
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Host Name
        </Typography>
        <TextField
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
        />
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Start & End date
        </Typography>
        <TextField value={date} onChange={(e) => setDate(e.target.value)} />
        <Typography sx={{ fontSize: "24px", color: "#240D57" }}>
          Location
        </Typography>
        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            gap: "10px",
            color: "white",
            width: "320px",
            height: "55px",

            background: "#8456EC",
            borderRadius: "10px",
          }}
          onClick={nextpageDataHandler}
        >
          Next Page
        </Button>
      </Grid>
    </Grid>
  );
};

export default Create;
