import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('Comportamento do formulário', () => {
jest.useFakeTimers(); 
test("quando o input esta vazio, novos participantes não podem ser adicionados", () => {
  render(<RecoilRoot ><Formulario /></RecoilRoot>);

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  render(<RecoilRoot ><Formulario /></RecoilRoot>);

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
  const botao = screen.getByRole("button");
  // simula digitação no input
  fireEvent.change(input, { target: { value: "Priscila" } });
  // simula clique no botão
  fireEvent.click(botao);

  // expectativa: input deve estar com foco
  expect(input).toHaveFocus();
  // expectativa: input deve estar vazio
  expect(input).toHaveValue("");
});

test("nomes duplicados não podem ser adicionados", () =>{
  render(<RecoilRoot ><Formulario /></RecoilRoot>);

   const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
  const botao = screen.getByRole("button");
  
  fireEvent.change(input, { target: { value: "Priscila" } });
  
  fireEvent.click(botao);

  fireEvent.change(input, { target: { value: "Priscila" } });
  
  fireEvent.click(botao);

  const mensagemErro = screen.getByRole("alert");
  expect(mensagemErro.textContent).toBe("Nomes duplicados não são permitidos!");

})

test("a mensagem de erro deve sumir apois os timers", () =>{
  
  render(<RecoilRoot ><Formulario /></RecoilRoot>);

   const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
  const botao = screen.getByRole("button");
  
  fireEvent.change(input, { target: { value: "Priscila" } });
  
  fireEvent.click(botao);

  fireEvent.change(input, { target: { value: "Priscila" } });
  
  fireEvent.click(botao);

  let mensagemErro = screen.queryByRole('alert');
  expect(mensagemErro).toBeInTheDocument();

    act(() => {
    jest.runAllTimers();
  });

mensagemErro = screen.queryByRole('alert')
expect(mensagemErro).toBeNull()


  
})
})


