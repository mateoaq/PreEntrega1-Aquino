import { Grid, Skeleton } from "@mui/material";
import React from "react";

export const ItemDetailLoader = () => {
  return (
    <Grid container xs={12} justifyContent="center">
      <Grid item>
        <Skeleton variant="rectangular" width={300} height={300} />
      </Grid>
      <Grid marginX={5}>
        <Skeleton variant="rectangular" width={600} height={300} />
      </Grid>
      <Grid item marginX={10} marginTop={5}>
        <Skeleton variant="rectangular" width={1200} height={300} />
      </Grid>
    </Grid>
  );
};
