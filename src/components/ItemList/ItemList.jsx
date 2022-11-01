import { Grid } from "@mui/material";
import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <Grid container xs={12} justifyContent="center" marginY={5}>
      <Grid container justifyContent="center" spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id}>
            <Item data={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
