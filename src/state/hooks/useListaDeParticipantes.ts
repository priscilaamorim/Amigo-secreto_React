import { useRecoilValue } from "recoil"
import { listaParticipantasState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaParticipantasState)
}