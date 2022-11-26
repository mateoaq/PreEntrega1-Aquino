import { Box, CardMedia, Chip, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const [stockSelected, setStockSelected] = useState(0);
  const context = useContext(CartContext);

  const onAddStock = (value) => {
    setStockSelected(value);
  };

  const addToCart = () => {
    context.addItems({ ...item, stock: stockSelected });
  };
  return (
    <Grid container xs={12} justifyContent="center">
      <Grid item>
        <CardMedia
          component="img"
          alt={item.product_name}
          height="300"
          image={item.image}
        />
      </Grid>
      <Grid marginX={5}>
        <Box>
          <Typography fontWeight="bold" fontSize={50}>
            {item.product_name}
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            fontWeight="bold"
            fontSize={20}
            style={{ textDecoration: "line-through" }}
          >
            ${item.price * (item.discount + 1)}
          </Typography>
          <Chip
            label={`-${item.discount * 100}%`}
            size="medium"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography fontWeight="bold" fontSize={30}>
            ${item.price}
          </Typography>
        </Box>
        <Box width={185}>
          <ItemCount
            stock={stockSelected}
            onAdd={onAddStock}
            addToCart={addToCart}
          />
        </Box>
      </Grid>
      <Grid item marginX={10} marginTop={5}>
        <Typography fontWeight="bold" fontSize={30}>
          Descripción
        </Typography>
        <Typography>{item.description}</Typography>
      </Grid>
    </Grid>
  );
};
