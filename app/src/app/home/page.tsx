"use client";

import { Box, Typography } from "@mui/material";
import Main from "./main";
import { motion } from "framer-motion";
import Categories from "./categories/main";
import Featured from "./featured/main";

const MotionTypography = motion(Typography);
const CategoriesMotion = motion(Categories);
const FeaturedMotion = motion(Featured);

export default function Home() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5ch"}
        sx={{
          
        }}
      >
        <Main />
        <MotionTypography
          variant="h1"
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          viewport={{ once: true }}
        >
          Categories
        </MotionTypography>
        <CategoriesMotion
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          viewport={{ once: true }}
        />
        <MotionTypography
          variant="h1"
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          viewport={{ once: true }}
        >
          Popular Products
        </MotionTypography>
        <FeaturedMotion
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
        />
      </Box>
    </>
  );
}
