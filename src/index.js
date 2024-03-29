import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./components/mago.js"
import { Arqueiro } from "./components/arqueiro.js"
import { ArqueiroMago } from "./components/arqueiro-mago.js"
import { Guerreiro } from "./components/guerreiro.js"

const saruman = new Mago('Saruman', 4, 'treva', 4, 3)
const gandalf = new Mago ('Gandalf', 8, 'luz', 7, 10)
const legolas = new Arqueiro ('Legolas', 7, 8)
const ashe = new ArqueiroMago ('Ashe', 7, 10, 'gelo', 4, 8)
.
const aragorn = new Guerreiro('Aragorn', 8)


const personagens = [saruman, gandalf, legolas, ashe, aragorn]

new PersonagemView(personagens).render()
console.log(Personagem.verificaVencedor(saruman, gandalf))

