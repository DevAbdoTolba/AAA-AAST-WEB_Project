import React from "react";
import Main from "./Main";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: "0 0 0 0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        zIndex: 9999,
        px: "3rem",
      }}
    >
      <Box
        sx={{
          mx: "3rem",
        }}
      >
        <Main />
      </Box>
    </Box>
  );
}
