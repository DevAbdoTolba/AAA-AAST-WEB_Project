import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function footer() {
  return (
    <Box
      width={"95vw"}
      bgcolor={"Main.light"}
      pt={"5ch"}
      px={"4%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      sx={{
        borderRadius: "1rem 1rem 0 0",
        overflow: "hidden",
        height: {
          xs: "auto",
          sm: "85vh",
        },
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems="stretch"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: {
            xs: "2rem",
            sm: "0",
          },
        }}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={"1rem"}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={700}
            color={"Main.primary"}
          >
            Logo
          </Typography>
          <Typography
            variant="subtitle2"
            // maximum of 10 words per line
            width={"45ch"}
          >
            Best designs Of furniture collections, all in one place. You can buy
            them online or visit our store.
          </Typography>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{
              "& *": {
                color: "Main.primary",
              },
              transform: "translateX(-.5rem)",
            }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </ButtonGroup>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          textAlign={"left"}
          gap={"1rem"}
          sx={{
            "& *": {
              color: "Main.primary",
              transform: "translateX(50%)",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={700}
            color={"Main.primary"}
          >
            Pages
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Home
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Shop
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Offers
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#contact"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            About us
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Contact us
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          textAlign={"left"}
          gap={"1rem"}
          sx={{
            "& *": {
              color: "Main.primary",
              transform: "translateX(50%)",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={700}
            color={"Main.primary"}
          >
            Services
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Kitchen
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Living Area
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Bathroom
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Dinning Hall
          </Typography>
          <Typography
            component={"a"}
            sx={{
              "&:hover": {
                color: "Main.primary",
                textDecoration: "underline",
              },
            }}
            href="#"
            variant="subtitle1"
            fontWeight={"100"}
            textAlign={"left"}
          >
            Bedroom
          </Typography>
        </Grid>
        <Grid
          id="contact"
          item
          xs={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          textAlign={"left"}
          gap={"1rem"}
          sx={{
            "& *": {
              color: "Main.primary",
              transform: "translateX(50%)",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={700}
            color={"Main.primary"}
          >
            Contact
          </Typography>
          <Typography variant="subtitle1" fontWeight={"100"} textAlign={"left"}>
            15 Aswan. Aswan, Egypt
          </Typography>
          <Typography variant="subtitle1" fontWeight={"100"} textAlign={"left"}>
            11201 meine@kampf.com
          </Typography>
          <Typography variant="subtitle1" fontWeight={"100"} textAlign={"left"}>
            +20 1234 567 8910
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          textAlign: "center",

          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{
            width: {
              xs: "auto",
              sm: "50ch",
            },
          }}
        >
          Copyright Meine Kampf &copy; &nbsp;
          {new Date().getFullYear()}
        </Typography>
        <Typography variant="subtitle2" fontWeight={"100"} textAlign={"center"}>
          Devolped by Abdulrahman Tolba, Amr Elbana, and Ahmed AboElwafa |
          Designed by Mai Haggag
        </Typography>
      </Grid>
    </Box>
  );
}
