import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

import { login, register, recoverUserInformation } from "../services/auth";

type UserLogin = {
  email: string;
  password: string;
};

type User = {
  name?: string;
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
  registerUser: (data: RegisterData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserLogin | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation()
        .then((response) => {
          setUser(response.user);
        })
        .catch((error) => {
          console.error("Erro ao recuperar informações do usuário:", error);
          setUser(null);
          destroyCookie(undefined, "nextauth.token");
          Router.push("/login");
        });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const { user, token } = await login({ email, password });

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);

      Router.push("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Falha ao fazer login. Por favor, tente novamente.");
    }
  }

  async function registerUser({ name, email, password }: RegisterData) {
    try {
      const userData = { name, email, password };
      await register(userData);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Falha ao registrar usuário. Por favor, tente novamente.");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
