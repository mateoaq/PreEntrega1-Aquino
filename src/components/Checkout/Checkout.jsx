import { Box, Button, TextField, Typography } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import { CheckoutLoader } from "../Loader/CheckoutLoader";

export const Checkout = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();
  const cart = useContext(CartContext);

  useEffect(() => {
    if (
      name !== "" &&
      lastname !== "" &&
      phone !== "" &&
      email !== "" &&
      email2 !== ""
    ) {
      if (email === email2) {
        setNextButtonDisabled(false);
      }
    } else {
      setNextButtonDisabled(true);
    }
  }, [name, lastname, email, email2, phone]);

  const sendOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const objOrder = {
      buyer: {
        name,
        lastname,
        email,
        phone,
      },
      items: cart.cartItems,
      total: cart.invoiceTotal,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, objOrder)
      .then((data) => {
        setOrderId(data.id);
        cart.resetCart();
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <CheckoutLoader />;
  }
  return (
    <div>
      {orderId === "" ? (
        <form onSubmit={sendOrder}>
          <Box textAlign="center" marginY={3}>
            <Box marginY={2}>
              <Typography variant="h4">
                {" "}
                Ingresa tus datos para realizar el envio{" "}
              </Typography>
            </Box>
            <Box marginY={2}>
              <TextField
                id="outlined-name"
                label="Name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                id="outlined-name"
                label="Apellido"
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                id="outlined-name"
                label="Email"
                value={email}
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-name"
                label="Repetir email"
                type="email"
                required
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
            </Box>
            <Box marginY={2}>
              <TextField
                id="outlined-name"
                label="Telefono"
                type="number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
          </Box>
          <Box textAlign="center" marginY={2}>
            <Button variant="outlined" onClick={() => navigate("/cart")}>
              Volver
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={nextButtonDisabled}
            >
              Comprar
            </Button>
          </Box>
        </form>
      ) : (
        <CodeView id={orderId} />
      )}
    </div>
  );
};

const CodeView = ({ id }) => {
  return (
    <Box textAlign="center" marginY={3}>
      <Typography variant="h4">Tu codigo de compra es</Typography>
      <Typography variant="h3" fontWeight={500}>
        {id}
      </Typography>
      <Typography>Si lo pierdes moriras.</Typography>
    </Box>
  );
};
