import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const priceRow = (qty, unit) => {
  return qty * unit;
};

export const Cart = () => {
  const context = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      {context.cartItems.length > 0 ? (
        <>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Detalle
                </TableCell>
                <TableCell align="right">Precio</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.cartItems.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                  <TableCell align="right">{`$ ${row.price}`}</TableCell>
                  <TableCell align="right">
                    {`$ ${ccyFormat(priceRow(row.price, row.stock))}`}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{`$ ${ccyFormat(
                  context.invoiceSubtotal
                )}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IVA</TableCell>
                <TableCell align="right">{`${(context.TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{`$ ${ccyFormat(
                  context.invoiceTaxes
                )}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{`$ ${ccyFormat(
                  context.invoiceTotal
                )}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box
            width={"100%"}
            justifyContent="flex-end"
            display="flex"
            marginY={2}
          >
            <Box paddingX={3}>
              <Button variant="outlined" onClick={context.resetCart}>
                Limpiar carrito
              </Button>
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Realizar comprar
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box width={"100%"} justifyContent="center" display="flex" marginY={2}>
          <Box>
            <p>Su carrito esta vacío</p>
            <Button variant="contained" onClick={() => navigate("/")}>
              Volver al inicio
            </Button>
          </Box>
        </Box>
      )}
    </TableContainer>
  );
};
