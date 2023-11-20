"use client";
import React from "react";

import { Box } from "@mui/material";

import Card from "@/app/util/components/Card";

const MockData = [
  {
    favorite: false,
    image: "chair.png",
    state: "Discount",
    description: "Very good Chair",
    price: 100,
    inCart: false,
  },
  {
    favorite: true,
    image: "table.png",
    state: "Sold Out",
    description: "Very good Table",
    price: 200,
    inCart: true,
  },
  {
    favorite: false,
    image: "lambs.png",
    state: "Discount",
    description: "Very good lambs",
    price: 300,
    inCart: false,
  },
  {
    favorite: true,
    image: "coach.png",
    state: "Sold Out",
    description: "Very good coach",
    price: 400,
    inCart: true,
  },
  {
    favorite: false,
    image: "chair.png",
    state: "Discount",
    description: "Very good Chair",
    price: 100,
    inCart: false,
  },
  {
    favorite: true,
    image: "table.png",
    state: "Sold Out",
    description: "Very good Table",
    price: 200,
    inCart: true,
  },
  {
    favorite: false,
    image: "lambs.png",
    state: "Discount",
    description: "Very good lambs",
    price: 300,
    inCart: false,
  },
  {
    favorite: true,
    image: "coach.png",
    state: "Sold Out",
    description: "Very good coach",
    price: 400,
    inCart: true,
  },
  {
    favorite: false,
    image: "chair.png",
    state: "Discount",
    description: "Very good Chair",
    price: 100,
    inCart: false,
  },
];
export default function Main() {
  return (
    <>
      <Box
        width={"100%"}
        display={"grid"}
        // grid 4 in the first row then 4 in the second row

        gap={2}
        textAlign={"center"}
        bgcolor={"#fff"}
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },
        }}
      >
        {MockData.map((item, i) => (
          <Card
            key={i}
            favorite={item.favorite}
            image={item.image}
            state={item.state}
            description={item.description}
            price={item.price}
            inCart={item.inCart}
          />
        ))}
      </Box>
    </>
  );
}
