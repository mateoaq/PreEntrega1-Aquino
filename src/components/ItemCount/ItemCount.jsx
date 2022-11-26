import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export const ItemCount = ({ stock, initial, onAdd, addToCart }) => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={2}
        minWidth={184}
      >
        <Button
          variant={"outlined"}
          onClick={() => onAdd(Math.max(stock - 1, 0))}
        >
          -
        </Button>
        <Box>{stock}</Box>
        <Button variant={"outlined"} onClick={() => onAdd(stock + 1)}>
          +
        </Button>
      </Box>
      {stock > 0 && (
        <Box onClick={addToCart}>
          <Button variant={"contained"}>Agregar al carrito</Button>
        </Box>
      )}
    </div>
  );
};
