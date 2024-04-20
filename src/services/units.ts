import { api } from "./api";

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
