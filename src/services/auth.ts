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

export async function login(user: User) {
  await delay(1000);

  return {
    token: uuid(),
    user: {
      email: user.email,
      password: user.password,
    },
  };
}

export async function register(user: Register) {
  await delay(1000);

  api.post("/enfermeiros", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}

export async function logout() {
  await delay(1000);
  return {};
}

export async function recoverUserInformation() {
  await delay(1000);

  return {
    user: {
      email: "",
      password: "",
    },
  };
}
