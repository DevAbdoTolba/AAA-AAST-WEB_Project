import React from "react";

import { Box } from "@mui/material";

import Main from "./Main";
import Related from "./related/Main";
export default function page() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          my: 10,
        }}
      >
        <Main />
        <Related />
      </Box>
    </>
  );
}
