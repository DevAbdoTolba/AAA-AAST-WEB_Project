import React from "react";

import { Box, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Image from "next/image";

interface Props {
  favorite: boolean;
  image: string;
  state: "New" | "Discount" | "Sold Out";
  description: string;
  price: number;
  inCart: boolean;
}

export default function Card({
  favorite,
  image,
  state,
  description,
  price,
  inCart,
}: Props) {
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const [isInCart, setIsInCart] = React.useState(inCart);

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
        onClick={() => {
          setIsFavorite((prev) => {
            return !prev;
          });
        }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Box flexBasis={"60%"}
        height={"100%"}
        width={
            "100%"
        }
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Image
          src={"/images/" + image}
          alt={description}
          width={192.09}
          height={200}
        />
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
                  ? "Main.green"
                  : state === "Discount"
                  ? "Main.yellow"
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
            {price} EGP
          </Typography>
        </Box>
        <Button
          className={isInCart ? "outlined" : "filled"}
          sx={{
            width: "80%",
            textAlign: "right",
          }}
          onClick={() => {
            setIsInCart((prev) => {
              return !prev;
            });
          }}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </Box>
    </Box>
  );
}
