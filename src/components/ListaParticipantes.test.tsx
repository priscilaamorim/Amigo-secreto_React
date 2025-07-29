import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

jest.mock("../state/hooks/useListaDeParticipantes", () => {
   return {
    useListaDeParticipantes: jest.fn()
   }
})

describe('uma linsta vazia de participantes', () => {
beforeEach(() => {
   ( useListaDeParticipantes as jest.Mock).mockReturnValue([])
})

    test('deve ser renderizada sem elementos', () => {
        render(
    <RecoilRoot>
      <ListaParticipantes/>  
    </RecoilRoot>
)

const itens = screen.queryAllByRole('listitem')
expect(itens).toHaveLength(0)
    })
})

describe('uma linsta preenchida de participantes', () => {

const participantes = ["Ana", "Priscila"]
beforeEach(() => {
   ( useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
})

    test('deve ser renderizada sem elementos', () => {
        render(
    <RecoilRoot>
      <ListaParticipantes/>  
    </RecoilRoot>
)

const itens = screen.queryAllByRole('listitem')
expect(itens).toHaveLength(participantes.length)
    })
})