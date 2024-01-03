import React from "react";

import { Box, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Image from "next/image";

interface Props {
  id: string;
  favorite: boolean;
  image: string;
  state: string;
  description: string;
  price: number;
  inCart: boolean;
}

export default function Card({
  id,
  favorite,
  image,
  state,
  description,
  price,
  inCart,
}: Props) {
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const [isInCart, setIsInCart] = React.useState(inCart);

  const handelAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token?.length > 0) {
      fetch("/api/shop/cart?token=" + token + "&id=" + id)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log(res);
          setIsInCart((prev) => {
            return !prev;
          });
        });
    } else {
      alert("Please login to add to cart");
    }
  };

  const handelAddToFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token?.length > 0) {
      fetch("/api/shop/fev?token=" + token + "&id=" + id)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log(res);
          setIsFavorite((prev) => {
            return !prev;
          });
        });
    } else {
      alert("Please login to add to favorite");
    }
  };
  return (
    <Box
      bgcolor={"#f9f9f9"}
      minHeight={"60vh"}
      maxHeight={"50vh"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <IconButton
        aria-label="favorite"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(-50%, 50%)",
          color: "Main.red",
        }}
        onClick={handelAddToFavorite}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Box
        flexBasis={"60%"}
        height={"100%"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          "& img": {
            width: "50%",
            height: "50%",
            objectFit: "contain",
          },
        }}
      >
        <img src={"/images/" + image} alt={description} />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexBasis={"40%"}
        width={"100%"}
      >
        <Box
          sx={{
            width: "80%",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "1ch",
            letterSpacing: "1px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color:
                state === "New"
                  ? "Main.orange"
                  : state === "Discount"
                  ? "Main.green"
                  : "Main.red",
            }}
            fontWeight={"bold"}
          >
            {state}
          </Typography>

          <Typography variant="subtitle2" color={"#071b32"}>
            {description}
          </Typography>
          <Typography variant="subtitle1" color={"#071b32"} fontWeight={"bold"}>
            {price}ᵏ EGP
          </Typography>
        </Box>
        <Typography
          component={"a"}
          href={"/" + id}
          variant="subtitle1"
          color={"#071b32"}
          sx={{
            width: "80%",
            textAlign: "left",
            "&:hover": {
              color: "Main.primary",
              textDecoration: "underline",
            },
          }}
        >
          More info
        </Typography>

        <Button
          className={isInCart ? "outlined" : "filled"}
          sx={{
            width: "80%",
            textAlign: "right",
          }}
          onClick={handelAddToCart}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </Box>
    </Box>
  );
}
