import { v4 as uuid } from "uuid";
import { api } from "./api";

type User = {
  name?: string;
  email: string;
  password: string;
};

interface Register {
  name: string;
  email: string;
  password: string;
}

const delay = (amount: number) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function login({ email, password }: User) {
  try {
    await delay(1000);

    const response = await api.get("/enfermeiros");

    if (response.status !== 200) {
      throw new Error("Falha ao fazer login.");
    }

    const enfermeiro = response.data.find(
      (enfermeiro: any) =>
        enfermeiro.email === email && enfermeiro.password === password
    );

    if (enfermeiro && enfermeiro.name) {
      localStorage.setItem("enfermeiroName", enfermeiro.name);
    }

    if (!enfermeiro) {
      throw new Error("Falha ao fazer login.");
    }

    return {
      user: enfermeiro,
      token: uuid(),
    };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Falha ao fazer login.");
  }
}

export async function register(user: Register) {
  try {
    await delay(1000);

    const response = await api.post("/enfermeiros", {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    if (response.status !== 201) {
      throw new Error("Falha ao registrar usuário.");
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Falha ao registrar usuário.");
  }
}

export async function recoverUserInformation() {
  try {
    await delay(1000);

    return {
      user: {
        email: "email@email.com",
        password: "password",
        name: "name",
      },
    };
  } catch (error) {
    console.error("Erro ao recuperar informações do usuário:", error);
    throw new Error("Falha ao recuperar informações do usuário.");
  }
}
