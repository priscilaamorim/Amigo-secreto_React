import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracao from "./Configuracao"


const mockNavigacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigacao,
  };
});

describe('a pagina de configuracao', () => {
    test('deve ser renderizada corretamente', () => {
const {container} = render(
    <RecoilRoot>
        <Configuracao />
    </RecoilRoot>
)

expect(container).toMatchSnapshot()
    

    })
})