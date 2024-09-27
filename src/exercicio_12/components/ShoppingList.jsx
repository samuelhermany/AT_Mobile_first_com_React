import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Typography,
} from "@mui/material";


export function ShoppingList({items}) {
    // Armazena as quantidades
    const [quantidades, setQuantidades] = useState(
        items.map(item => item.quantidade)
    );

    const handleQuantidadeChange = (index, value) => {
        const newQuantities = [...quantidades];
        // Garante que o mínimo seja 1
        newQuantities[index] = Math.max(1, value);
        setQuantidades(newQuantities);
    };

    const totalValue = quantidades.reduce(
        (acc, qt, index) => acc + (items[index].precoUnitario * qt),
        0
    );

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Lista de Compras
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Valor Unitário</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Valor Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => {
                            const itemTotal = item.precoUnitario * quantidades[index];
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>R${item.precoUnitario.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <TextField
                                            type="number"
                                            min="1"
                                            // variant="outlined"
                                            size="small"
                                            value={quantidades[index]}
                                            onChange={(e) =>
                                                handleQuantidadeChange(index, parseInt(e.target.value) || 1)
                                            }
                                        />
                                    </TableCell>
                                    <TableCell>R${itemTotal.toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h5" style={{ marginTop: '16px' }}>
                Total da Compra: R${totalValue.toFixed(2)}
            </Typography>
        </div>
    );
}