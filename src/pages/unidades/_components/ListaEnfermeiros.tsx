import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface UnidadesData {
  name: string;
  selectedUnit: string;
  selectedShift: string;
}

export function UnidadesList() {
  const [data, setData] = useState<UnidadesData | null>(null);

  useEffect(() => {
    const unidadesData = localStorage.getItem("unidadesData");
    if (unidadesData) {
      setData(JSON.parse(unidadesData));
    }
  }, []);

  if (!data) {
    return <div>Nenhum dado disponível</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Nome</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Unidade</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Turno</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.selectedUnit}</TableCell>
            <TableCell>{data.selectedShift}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
