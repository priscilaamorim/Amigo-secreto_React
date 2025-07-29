import { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../state/hooks/useResultadoDoSorteio";
import './Sorteio.css'


const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [amigoSecreto, setAmigoSecreto] = useState("");
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section className="sorteio">
      <form onSubmit={sortear}>
        <select
          name="participantesDaVez"
          id="participantesDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione o seu nome</option>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
      <footer className="sorteio">
                <img src="/img/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
    </section>
  );
};

export default Sorteio;
