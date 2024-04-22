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
import { units } from "@/services/units";

interface Unidade {
  name: string;
  unidade: string;
  horario: string;
}

export default function UnidadesList() {
  const [unidades, setUnidades] = useState<Unidade[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const unidadesFromApi = await pegaUnidades();
        setUnidades(unidadesFromApi);
      } catch (error) {
        console.error("Erro ao buscar unidades:", error);
      }
    }

    fetchData();
  }, []);

  async function pegaUnidades() {
    const api = await units();
    return api;
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
          {unidades.map((unidade, index) => (
            <TableRow key={index}>
              <TableCell>{unidade.name}</TableCell>
              <TableCell>{unidade.unidade}</TableCell>
              <TableCell>{unidade.horario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}