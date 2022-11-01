import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ data }) => {
  const [stockSelected, setStockSelected] = useState(0);

  const onAddStock = (value) => {
    setStockSelected(value);
  };
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt={data.product_name}
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link
            to={`/product/${data.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {data.product_name}
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={stockSelected} onAdd={onAddStock} />
      </CardActions>
    </Card>
  );
};
