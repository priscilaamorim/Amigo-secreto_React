# 🎁 Amigo Secreto

Este projeto é uma aplicação **React** desenvolvida em **TypeScript** que permite organizar sorteios de **amigo secreto** de forma divertida e interativa.  
Além disso, conta com **testes automatizados**, gerenciamento de estado com **Recoil**, componentes reutilizáveis, hooks customizados e foco em boas práticas.

---

## 🔍 Visão Geral

A aplicação permite:

- ✅ Cadastrar participantes
- 🔁 Validar nomes duplicados
- 🎲 Iniciar a brincadeira com sorteio aleatório
- 👀 Exibir quem é o amigo secreto de cada participante
- ⏱️ Ocultar a mensagem após alguns segundos
- 🧪 Garantir a qualidade através de testes com Jest e React Testing Library

---

## 🧰 Tecnologias Utilizadas

- [x] React com TypeScript  
- [x] Recoil para estado global  
- [x] React Router DOM para navegação entre páginas  
- [x] Jest + Testing Library para testes automatizados  
- [x] Hooks personalizados  
- [x] `useRef` para manipulação de foco no DOM  
- [x] Funções puras reutilizáveis  
- [x] Styled Components (ou CSS Modules)  

---

# 💡 Principais Conceitos Aplicados
---

## 🧱 Separação de Responsabilidades

Cada parte da lógica da aplicação foi dividida de forma clara e coesa:

- Funções puras que podem ser reutilizadas em diferentes contextos
- Hooks personalizados que encapsulam lógica específica
- Componentes pequenos, focados em uma única responsabilidade

> ✨ Resultado: código limpo, testável e fácil de manter.

---

## 🔗 Estado Global com Recoil

Utilizamos o **Recoil** para gerenciar o estado global da aplicação sem a necessidade de prop drilling.

- Criamos `atoms` para armazenar dados compartilhados
- Usamos `selectors` para derivar valores computados com base no estado

> 💡 Exemplo: participantes e resultado do sorteio são acessados por qualquer componente que precise.

---

## 🧠 Hooks Customizados

A lógica foi organizada com hooks como:

- `useListaDeParticipantes`: para listar e reagir às mudanças no estado global de participantes
- `useResultadoSorteio`: para acessar os pares sorteados de forma reativa

> 🔁 Isso aumenta a **reutilização**, **clareza** e reduz duplicações no código.

---

## 🧭 Controle de Foco com `useRef`

Usamos o `useRef` para manipular diretamente elementos do DOM:

- Após adicionar um participante, o campo de input recebe o foco automaticamente

> 🎯 Isso melhora a experiência do usuário sem depender de bibliotecas externas.

---

## 🚫 Validação de Dados

Aplicamos regras de validação diretamente na lógica da aplicação:

- Bloqueio de nomes duplicados
- Exibição de mensagens de erro temporárias usando estado + `setTimeout`

> ⏳ A mensagem some automaticamente após alguns segundos, sem precisar de interação manual.

---

## ✅ Testes Automatizados com Jest e Testing Library

Garantimos a qualidade e confiabilidade da aplicação com testes automatizados que cobrem os principais fluxos:

- Adição de participantes
- Validação de regras
- Sorteio e exibição de resultados
- Comportamento assíncrono como mensagens temporárias

> 🧪 Usamos mocks, timers falsos e snapshots quando necessário para garantir previsibilidade e cobertura.

---

## 📚 Conclusão

A combinação desses conceitos torna a aplicação:

- Manutenível
- Escalável
- Confiável
- Profissional

Esse projeto serve como base sólida para qualquer aplicação React que exija organização, reatividade e testes robustos.

---
## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/priscilaamorim/amigo-secreto.git
cd amigo-secreto
npm install 

npm test```