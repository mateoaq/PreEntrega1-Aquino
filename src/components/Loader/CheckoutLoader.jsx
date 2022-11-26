import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export const CheckoutLoader = () => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Box>
        <Box marginY={2} justifyContent="center">
          <Skeleton variant="rectangular" width={1000} height={100} />
        </Box>
        <Box marginY={2}>
          <Skeleton variant="rectangular" width={1000} height={100} />
        </Box>
        <Box marginY={2}>
          <Skeleton variant="rectangular" width={1000} height={100} />
        </Box>
      </Box>
    </Box>
  );
};
