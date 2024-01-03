"use client";

import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

interface Props {
  name: string;
  id: string;
  favorite: boolean;
  image: string;
  state: string;
  description: string;
  price: number;
  inCart: boolean;
}
export default function CartCard({
  name,
  id,
  favorite,
  image,
  state,
  description,
  price,
  inCart,
}: Props) {
  const [isInCart, setIsInCart] = React.useState(inCart);
  const token = localStorage.getItem("token");
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

  return (
    <>
      <>
        <div className="product">
          <Box
            className="image_cont"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              justifyContent: "center",
              alignItems: "center",

              flexWrap: {
                xs: "wrap",
                sm: "nowrap",
              },
            }}
          >
            <img src={"./images/" + image} alt={name} className="image" />
            <div className="text">
              <h4>{name}</h4>
            </div>

            <div>
              <h3>£{price} ᵏ</h3>
            </div>
            <Button
              className={isInCart ? "outlined" : "filled"}
              onClick={handelAddToCart}
              sx={{
                width: {
                  xs: "100%",
                  sm: "50ch",
                },
              }}
            >
              {isInCart ? "Remove from cart" : "Add to cart"}
            </Button>
          </Box>
        </div>
      </>
    </>
  );
}
