"use client";
import { Box, Typography } from "@mui/material";
import "./style.css";
import Home from "./home/page";
import { useEffect } from "react";
import Head from "next/head";
export default function Root() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/home";
    }, 1500);
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          transform: "translate(0,0)",
          backgroundColor: "white",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="center_loading">
          <div className="box1"></div>

          <div className="box2"></div>

          <div className="box3"></div>
        </div>
      </Box>
    </>
  );
}
