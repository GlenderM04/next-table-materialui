import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';  // Importa el componente Image de next/image

function createData(name, calories, fat, carbs, protein, imageUrl) {
  return { name, calories, fat, carbs, protein, imageUrl };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg'),
];

export default function ImageTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Image</TableCell> {/* Nueva columna para la imagen */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="center">
                {/* Usando next/image para renderizar la imagen */}
                <Image src={row.imageUrl} alt={row.name} width={50} height={50} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
