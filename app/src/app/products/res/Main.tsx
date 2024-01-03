"use client";
import React from "react";

import { Box } from "@mui/material";

import Card from "@/app/util/components/Card";

export default function Main() {
  const [loading, setLoading] = React.useState(true);
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
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(
      "http://localhost:3000/api/products/route?n=15" +
        (token?.length > 0 ? "&token=" + token : "")
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res);

        setMockData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {!loading && (
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
              id={item?.product_id}
              favorite={item?.favorite || false}
              image={item?.product_image}
              state={item?.product_state}
              description={item?.product_description}
              price={item?.product_price}
              inCart={item?.inCart || false}
            />
          ))}
        </Box>
      )}
    </>
  );
}
