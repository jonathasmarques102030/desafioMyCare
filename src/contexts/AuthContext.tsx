import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import {
  login,
  logout,
  register,
  recoverUserInformation,
} from "../services/auth";
import { api } from "../services/api";

type UserLogin = {
  name?: string;
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  password: string;
};

type SignInData = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  registerUser: (data: RegisterData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserLogin | null>(null);
  const [cadastroUser, setCadastroUser] = useState<UserLogin | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await login({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    const response = await api.post("/login", { email, password });

    if (response.data == "Email válido") {
      Router.push("/administracao");
    }

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);
  }

  async function signOut() {
    await logout();

    setUser(null);

    setCookie(undefined, "nextauth.token", "", {
      maxAge: -1,
    });

    Router.push("/");
  }

  async function registerUser({ name, email, password }: User) {
    const response = await register({
      name,
      email,
      password,
    });

    setCadastroUser(response.cadastroUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
