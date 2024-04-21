import React from "react";
import { Grid, TextField, MenuItem, Button, Box } from "@mui/material";
import { useUnidades } from "./useUnidades";
import Header from "../../@components/header/Header";
import { UnidadesList } from "./_components/ListaEnfermeiros";

const healthUnits = [
  { unidade: "Unidade Pitangui", horario: ["Manhã", "Tarde"] },
  { unidade: "Unidade Carlos Prates", horario: ["Manhã", "Tarde", "Noite"] },
  { unidade: "Unidade Hodilon Behrens", horario: ["Tarde", "Noite"] },
];

export default function Unidades() {
  const {
    selectedUnit,
    selectedShift,
    turno,
    name,
    handleUnitChange,
    handleShiftChange,
    handleConfirm,
    handleNameChange,
  } = useUnidades();

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Nome"
              value={name}
              onChange={handleNameChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              select
              fullWidth
              label="Unidade"
              value={selectedUnit}
              onChange={handleUnitChange}
            >
              {healthUnits.map((unit, index) => (
                <MenuItem value={unit.unidade} key={index}>
                  {unit.unidade}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {selectedUnit && (
            <Box mb={2}>
              <TextField
                select
                fullWidth
                label="Turno"
                value={selectedShift}
                onChange={handleShiftChange}
              >
                {turno.map((shift, index) => (
                  <MenuItem value={shift} key={index}>
                    {shift}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          )}
          {selectedUnit && selectedShift && (
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirm}
                >
                  Confirmar
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <UnidadesList />
        </Grid>
      </Grid>
    </>
  );
}
