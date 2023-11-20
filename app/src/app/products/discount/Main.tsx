"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Main() {
  // Timer starts from 16:59:59 to 0
  // prettier-ignore
  const [time, setTime] = React.useState((16 * 60 * 60) + (59 * 60) + 59 );
  const [navigator, setNavigator] = React.useState([1, 0, 0, 0, 0, 0]);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={0}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Grid
          item
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          xs={6}
          sx={{
            bgcolor: "Main.black",
            color: "Main.white",
            padding: "8ch 8ch",
          }}
        >
          <Box>
            <Typography variant="h1" gutterBottom>
              Simple Life Style
            </Typography>
            <Typography variant="h4" gutterBottom>
              UP to 80% OFF
            </Typography>
          </Box>
          <Box width={"100%"}>
            <Grid
              container
              justifyContent={"flex-start"}
              flexWrap={"nowrap"}
              alignItems={"flex-end"}
              gap={2}
              sx={{
                "& *": {
                  transition: "all .5s",
                },
              }}
            >
              {navigator.map((item, index) => {
                return (
                  <Grid item xs={1} key={index}>
                    <Box
                      onClick={() => {
                        setNavigator((prev) => {
                          const temp = prev.map((item) => 0);
                          temp[index] = 1;
                          return temp;
                        });
                      }}
                      sx={{
                        bgcolor: "Main.white",
                        borderRadius: ["1ch"],
                        width: "20px",
                        aspectRatio: item ? 1 / 2 : 5 / 5,

                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            bgcolor={"Main.black"}
            color={"Main.white"}
            padding={"3ch 10ch"}
            right={"0"}
            position={"absolute"}
            sx={{
              transform: "translate(25%, -50%)",
              transformOrigin: "center",
              rotate: "45deg",
            }}
          >
            <Typography variant="h3" id="timer">
              {Math.floor(time / 3600)}:
              {Math.floor((time % 3600) / 60) < 10
                ? "0" + Math.floor((time % 3600) / 60)
                : Math.floor((time % 3600) / 60)}
              :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
            </Typography>
            <Typography variant="h6">Discounts up to 90%</Typography>
          </Box>
          <img
            src="./images/couchBaner.png"
            alt="a white couch "
            draggable="false"
          />
        </Grid>
      </Grid>
    </>
  );
}
