import { api } from "./api";

interface unitDate {
  name: string;
  unidade: string;
  horario: string;
}

const delay = (amount: number) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function units() {
  try {
    await delay(1000);

    const response = await api.get("/unidades");

    if (response.status !== 200) {
      throw new Error("Falha ao buscar unidades.");
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar unidades:", error);
    throw new Error("Falha ao buscar unidades.");
  }
}

export async function registerUnit(unit: unitDate) {
  try {
    await delay(1000);

    const response = await api.post("/unidades", {
      name: unit.name,
      unidade: unit.unidade,
      horario: unit.horario,
    });

    if (response.status !== 201) {
      throw new Error("Falha ao registrar unidade.");
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao registrar unidade:", error);
    throw new Error("Falha ao registrar unidade.");
  }
}
