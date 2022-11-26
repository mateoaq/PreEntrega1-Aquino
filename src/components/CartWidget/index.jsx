import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const context = useContext(CartContext);

  return (
    <Box display={"flex"} alignItems="center">
      <TotalCountCart total={context.cartItems.length} />
      <AddShoppingCartIcon style={{ color: "white" }} />
    </Box>
  );
};

const TotalCountCart = ({ total }) => {
  return <p style={{ color: "white" }}>{total}</p>;
};
