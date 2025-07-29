import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantasState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantasState);
  const lista = useRecoilValue(listaParticipantasState);
  const setErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {

    if(lista.includes(nomeDoParticipante)){
setErro("Nomes duplicados não são permitidos!")
setTimeout(() => {
    setErro("")
}, 5000)  
return
    }


    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
