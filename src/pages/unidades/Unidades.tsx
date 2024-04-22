import React, { useState, useMemo, useEffect } from "react";
import { Grid, TextField, MenuItem, Button, Box } from "@mui/material";
import Header from "../../@components/header/Header";
import UnidadesList from "./_components/ListaEnfermeiros";
import { registerUnit } from "@/services/units";

const healthUnits = [
  { name: "Unidade Pitangui", shifts: ["Manhã", "Tarde"] },
  { name: "Unidade Carlos Prates", shifts: ["Manhã", "Tarde", "Noite"] },
  { name: "Unidade Hodilon Behrens", shifts: ["Tarde", "Noite"] },
];

export default function Unidades() {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const cadastroData = localStorage.getItem("enfermeiroName");
    if (cadastroData) {
      const nome = cadastroData;
      setName(nome);
    }
  }, []);

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUnit(event.target.value);
    setSelectedShift("");
  };

  const handleShiftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShift(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  async function handleConfirm() {
    const unit = { name, unidade: selectedUnit, horario: selectedShift };
    const resUnit = registerUnit(unit);

    return resUnit;
  }

  const turno = useMemo(
    () => healthUnits.find((unit) => unit.name === selectedUnit)?.shifts || [],
    [selectedUnit]
  );

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
                <MenuItem value={unit.name} key={index}>
                  {unit.name}
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
