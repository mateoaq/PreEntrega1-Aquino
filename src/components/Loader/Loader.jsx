import { Grid, Skeleton } from "@mui/material";
import React from "react";

export const Loader = () => {
  return (
    <Grid container xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        {["", "", "", "", "", ""].map(() => {
          return (
            <Grid margin={5}>
              <Skeleton variant="rectangular" width={345} height={345} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
