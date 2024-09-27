import React from "react";
import { ShoppingList } from "./components/ShoppingList";
import { Container } from "@mui/material";

export default function App() {
  const items = [
    { nome: "Celular", precoUnitario: 1302.6, quantidade: 1 },
    { nome: "Tablet", precoUnitario: 901, quantidade: 2 },
    { nome: "Pneu", precoUnitario: 200.5, quantidade: 3 },
  ];

  return (
    <Container maxWidth="sm" sx={{ padding: "16px" }}>
      <ShoppingList
        items={items}
      />
    </Container>
  );
}