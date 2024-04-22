import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Component from "../index";

describe("Teste no index da pagina", () => {
  it("Verifica se a tela está renderizando o titulo turnos disponiveis", () => {
    render(<Component />);
    const title = screen.getByText("Turnos Disponíveis!");
    expect(title).toBeInTheDocument();
  });
});
