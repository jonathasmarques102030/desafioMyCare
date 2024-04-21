import { registerUnit, units } from "@/services/units";
import { useState, useMemo, useEffect } from "react";

const healthUnits = [
  { name: "Unidade Pitangui", shifts: ["Manhã", "Tarde"] },
  { name: "Unidade Carlos Prates", shifts: ["Manhã", "Tarde", "Noite"] },
  { name: "Unidade Hodilon Behrens", shifts: ["Tarde", "Noite"] },
];

export function useUnidades() {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    const cadastroData = localStorage.getItem("enfermeiroName");
    if (cadastroData) {
      const nome = cadastroData
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
   const unit = { name, unidade: selectedUnit, horario: selectedShift }
   const resUnit = registerUnit(unit)

   return resUnit
  }

  const turno = useMemo(
    () => healthUnits.find((unit) => unit.name === selectedUnit)?.shifts || [],
    [selectedUnit]
  );

  return {
    selectedUnit,
    selectedShift,
    name,
    turno,
    handleUnitChange,
    handleShiftChange,
    handleConfirm,
    handleNameChange,
  };
}
