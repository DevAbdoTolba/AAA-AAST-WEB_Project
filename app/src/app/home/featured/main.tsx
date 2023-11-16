import Card from "@/app/util/components/Card";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionBox = motion(Box);

export default function Main() {
  const MockData = [
    {
      favorite: false,
      image: "chair.png",
      state: "New",
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
      state: "New",
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
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={2}
        textAlign={"center"}
        bgcolor={"#fff"}
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
    </>
  );
}
