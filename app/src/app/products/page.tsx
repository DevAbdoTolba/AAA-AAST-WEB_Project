import React from "react";
import Discount from "./discount/Main";
import Filter from "./filter/Main";
import Res from "./res/Main";
import { Grid } from "@mui/material";

export default function page() {
  return (
    <>
      <Grid container justifyContent={"center"} gap={5}>
        <Discount />
        <Grid container flexDirection={"row"} mb={20} >
          <Grid item xs={4}>
            <Filter />
          </Grid>
          <Grid item xs={8}>
            <Res />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
