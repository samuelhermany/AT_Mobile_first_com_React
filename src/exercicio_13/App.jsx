import React from "react";
import { Quiz } from "./components/Quiz";

export default function App() {
  const items = [
    { nome: "Celular", precoUnitario: 1302.6, quantidade: 1 },
    { nome: "Tablet", precoUnitario: 901, quantidade: 2 },
    { nome: "Pneu", precoUnitario: 200.5, quantidade: 3 },
  ];

  return (
    <div>
      <Quiz
        items={items}
      />
    </div>
  );
}