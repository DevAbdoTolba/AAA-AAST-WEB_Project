"use client";

import * as React from "react";
import { FirstNameContext } from "@/app/ThemeComponent"; // replace './Layout' with the actual path of your Layout component

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Avatar,
  ButtonGroup,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export default function Header() {
  const token = React.useContext(FirstNameContext);

  const [name, setName] = React.useState("");

  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    console.log(token);

    if (token == "" || token == null || token == undefined) {
      return;
    } else {
      console.log("logged in");

      setIsLogin(true);
    }
  }, [token]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} id="header">
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
              href="/"
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
              {/* <Link href="/offers">
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
              </Link> */}
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
                gap: {
                  xs: "0",
                  sm: "1rem",
                },
              }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              {isLogin ? (
                <IconButton onClick={handleClick}>
                  <Avatar
                    sx={{
                      bgcolor: "Main.primary",
                      color: "Main.white",
                      fontWeight: 700,
                    }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    {token[0].toUpperCase()}
                  </Avatar>
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    window.location.href = "/SignIn";
                  }}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              )}
              <IconButton
                onClick={() => {
                  window.location.href = "/cart";
                }}
              >
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("firstname");
            localStorage.removeItem("balance");
            handleClose();
            window.location.reload();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
