"use client";

import React from "react";
import { Typography, Box, Slider } from "@mui/material";

export default function Main() {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const colors = [
    "#ffba07",
    "#041830",
    "#00c437",
    "#e52d04",
    "#fe03a9",
    "#ff7a00",
    "#8000ff",
    "#0029ff",
    "#00bffc",
    "#262335",
  ];

  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight={600} color={"Main.black"}>
          Categories
        </Typography>
        <Typography variant="subtitle2" color={"Main.grey"}>
          New Arrivals
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}>
          <Typography variant="subtitle1" color={"Main.black"}>
            Chairs & Sofas
          </Typography>
          <Box ml={2}>
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              All
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Living Room
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Bed Room
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Kitchen Room
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Office
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Coffee & Resturant
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              Other
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              BOARDS
            </Typography>{" "}
            <Typography
              variant="subtitle1"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              LIGHTING
            </Typography>{" "}
            <Typography
              variant="subtitle1"
              color={"Main.grey"}
              sx={{
                color: "Main.grey",
                cursor: "pointer",
                "&:hover": {
                  color: "Main.black",
                  textDecoration: "underline",
                },
              }}
            >
              DECORATIONS
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color={"Main.grey"}
              sx={{
                color: "Main.black",
              }}
            >
              Price
            </Typography>

            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              sx={{
                width: "50%",
                " & *:not( .MuiSlider-valueLabel)": {
                  color: "Main.black",
                  bgcolor: "Main.black",
                },
                "& .MuiSlider-valueLabel ": {
                  color: "Main.white",
                },
              }}
            />
            <Typography variant="subtitle2" color={"Main.black"}>
              Range $ {value[0]} - $ {value[1]}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color={"Main.grey"}
              sx={{
                color: "Main.black",
              }}
            >
              Color
            </Typography>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"flex-start"}
              width={"50%"}
              gap={2}
              flexDirection={"row"}
            >
              {colors.map((color, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      bgcolor: color,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  ></Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
