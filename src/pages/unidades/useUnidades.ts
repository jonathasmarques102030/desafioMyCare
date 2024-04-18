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
    const cadastroData = localStorage.getItem("cadastroData");
    if (cadastroData) {
      const { nome } = JSON.parse(cadastroData);
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

  const handleConfirm = () => {
    const data = { name, selectedUnit, selectedShift };
    localStorage.setItem("unidadesData", JSON.stringify(data));
  };

  const horario = useMemo(
    () => healthUnits.find((unit) => unit.name === selectedUnit)?.shifts || [],
    [selectedUnit]
  );

  return {
    selectedUnit,
    selectedShift,
    horario,
    name,
    handleUnitChange,
    handleShiftChange,
    handleConfirm,
    handleNameChange,
  };
}
