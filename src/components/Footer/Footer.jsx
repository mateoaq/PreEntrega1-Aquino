import React from "react";
import { AppBar, Box, Container, TableFooter, Toolbar } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar position="static" color={"primary"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TableFooter style={{ width: "100%", textAlign: "center" }}>
            <Box>Desarrollado por Mateo Aquino | 2022</Box>
          </TableFooter>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
