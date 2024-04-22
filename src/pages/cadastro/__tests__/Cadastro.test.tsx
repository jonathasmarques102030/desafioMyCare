import React from "react";
import { render, screen } from "@testing-library/react";
import Cadastro from "../Cadastro";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
}));

test("renders Cadastro component", () => {
  render(<Cadastro />);
  expect(screen.getByText("Cadastro")).toBeInTheDocument();
});
