"use client";

import React from "react";
import Card from "@/app/util/components/Card";
import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
const MotionBox = motion(Box);

export default function Main() {
  const [data, setData] = React.useState([
    {
      product_id: "",
      product_image: "",
      product_state: "",
      product_description: "",
      product_price: 0,
      inCart: false,
      favorite: false,
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products/route?n=8")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);

        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MotionBox
        width={"100%"}
        display={"grid"}
        // grid 4 in the first row then 4 in the second row

        gap={2}
        textAlign={"center"}
        bgcolor={"#fff"}
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        {data.map((item, i) => (
          <Card
            key={i}
            id={item?.product_id}
            favorite={item?.favorite || false}
            image={item?.product_image}
            state={item?.product_state}
            description={item?.product_description}
            price={item?.product_price}
            inCart={item?.inCart || false}
          />
        ))}
      </MotionBox>
      <Button
        className={"outlined"}
        sx={{
          px: 8,
          py: 1.5,
          mb: 5,
        }}
        onClick={() => {
          window.location.href = "products";
        }}
      >
        More Products
      </Button>
    </>
  );
}
