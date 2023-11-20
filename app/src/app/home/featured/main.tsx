import Card from "@/app/util/components/Card";
import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionBox = motion(Box);

export default function Main() {
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
      state: "New",
      description: "Very good chair",
      price: 500,
      inCart: false,
    },
    {
      favorite: true,
      image: "lambs.png",
      state: "Sold Out",
      description: "Very good lambs",
      price: 600,
      inCart: true,
    },
    {
      favorite: false,
      image: "coach.png",
      state: "New",
      description: "Very good coach",
      price: 700,
      inCart: false,
    },
    {
      favorite: true,
      image: "table.png",
      state: "Sold Out",
      description: "Very good Table",
      price: 800,
      inCart: true,
    },
  ];

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
            xs : "1fr",
            sm : "1fr 1fr 1fr 1fr",
          }
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
      </MotionBox>
      <Button className={"outlined"} 
        sx={{
          px: 8,
          py: 1.5,
          mb: 5,
        }}
        onClick={()=>{
          window.location.href = "products"
        }}
      >
        More Products
      </Button>
    </>
  );
}
