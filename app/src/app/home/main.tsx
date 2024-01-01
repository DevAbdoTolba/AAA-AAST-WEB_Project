"use client";

import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
const MotionBox = motion(Box);

export default function Main() {
  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
        }}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        textAlign={"center"}
        bgcolor={"#f9f9f9"}
        sx={{
          borderRadius: "3ch 3ch 0 0",
          height: "100vh",
        }}
      >
        <Box mt={5}>
          <Typography variant="h1">Best Designs of</Typography>
          <Typography variant="h1">Furniture Collections</Typography>
          <Button
            className={"outlined"}
            sx={{
              mt: 3,
              px: 8,
              py: 1.5,
              fontWeight: 700,
            }}
            onClick={() => {
              window.location.href = "products";
            }}
          >
            Check out
          </Button>
          <MotionBox
            mt={"15ch"}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
            }}
            sx={{
              "& img": {
                width: "50%",
                height: "50%",
                objectFit: "cover",
              },
            }}
          >
            <img src={"/images/coach.png"} alt={"Coach"} />
          </MotionBox>
        </Box>
      </MotionBox>
    </>
  );
}
