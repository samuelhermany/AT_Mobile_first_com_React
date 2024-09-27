import React, { useState } from 'react';
import styles from './ShoppingList.module.css';
import './/..//../global.css';

export function ShoppingList({items, isDarkTheme}) {
  // Armazena as quantidades
  const [quantidades, setQuantidades] = useState(
    items.map(item => item.quantidade)
  );

  const handleQuantidadehange = (index, value) => {
    const newQuantities = [...quantidades];
    // Garante que o mínimo seja 1
    newQuantities[index] = Math.max(1, value);
    setQuantidades(newQuantities);
  };

  const totalValue = quantidades.reduce((acc, qt, index) => acc + (items[index].precoUnitario * qt), 0);

  return (
    <div className={`${styles.shopping_list} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
        <h1>Lista de Compras</h1>
        <table>
            <thead>
                <tr className={`${styles.item_cabecalho} ${!isDarkTheme ? 'theme-light-cabecalho' : 'theme-dark-cabecalho'}`}>
                    <th>Item</th>
                    <th>Valor Unitário</th>
                    <th>Quantidade</th>
                    <th>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    const itemTotal = item.precoUnitario * quantidades[index];
                    return (
                        <tr key={index} className={`${styles.item_row} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
                            <td>{item.nome}</td>
                            <td className={styles.valorUnit}>R${item.precoUnitario.toFixed(2)}</td>
                            <td className={styles.quant}>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantidades[index]}
                                    onChange={(e) =>
                                        handleQuantidadehange(index, parseInt(e.target.value) || 1)}
                                />
                            </td>
                            <td className={styles.valorTotal}>R${itemTotal.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <h2>Total da Compra: R${totalValue.toFixed(2)}</h2>
    </div>
  );
}