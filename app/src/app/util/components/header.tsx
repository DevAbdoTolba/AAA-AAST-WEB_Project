"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          all: "unset",
          display: "flex",
          height: "9vh",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "transparent",
        }}
      >
        <Grid
          container
          px="5%"
          justifyContent="space-between"
          textAlign={"center"}
          alignItems="center"
          direction={"row"}
          zIndex={1000}
        >
          <Grid item xs={4} textAlign={"start"}>
            <Typography
              variant="h6"
              component="a"
              href="/home"
              sx={{ flexGrow: 1 }}
              fontWeight={700}
              color={"Main.primary"}
            >
              Meine Kampf
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              direction={"row"}
            >
              <Link href="/home">
                <Typography
                  color={"Main.primary"}
                  fontWeight={400}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Home
                </Typography>
              </Link>
              <Link href="/products">
                <Typography
                  color={"Main.primary"}
                  fontWeight={400}
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    opacity: ".5",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  Products
                </Typography>
              </Link>
              <Link href="/offers">
                <Typography
                  color={"Main.primary"}
                  fontWeight={400}
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    opacity: ".5",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  Offers
                </Typography>
              </Link>
              <Link href="#contact">
                <Typography
                  color={"Main.primary"}
                  fontWeight={400}
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    opacity: ".5",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link href="#contact">
                <Typography
                  color={"Main.primary"}
                  fontWeight={400}
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    opacity: ".5",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={4} textAlign={"end"}>
            <ButtonGroup
              sx={{
                gap: "1rem",
              }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.location.href = "/SignIn";
                }}
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
