"use client";
import React from "react";

import "./style.css";
import { Box, Typography } from "@mui/material";

import Card from "@/app/util/components/Card";

export default function Main() {
  const [MockData, setMockData] = React.useState([
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

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    console.log(
      "http://localhost:3000/api/products/route?n=4" + (token?.length > 0)
        ? "&token=" + token
        : ""
    );

    fetch(
      "http://localhost:3000/api/products/route?n=4" +
        (token?.length > 0 ? "&token=" + token : "")
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);

        setMockData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box textAlign={"left"} width={"90vw"} my={5}>
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{
          color: "Main.primary",
          mb: 3,
        }}
      >
        Related Products
      </Typography>
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
            sm: "repeat(4, 1fr)",
          },
        }}
      >
        {!loading ? (
          <>
            {MockData.map((item, i) => (
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
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
