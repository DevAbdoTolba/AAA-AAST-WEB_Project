"use client";
import { Box, Typography } from "@mui/material";
import Home from "./home/page";
import { useEffect } from "react";
export default function Root() {
  useEffect(() => {
    window.location.href = "/home";
  }, []);
  return <></>;
}
