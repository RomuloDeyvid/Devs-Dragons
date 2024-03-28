export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    
    descricao

    constructor (nome){
        this.nome = nome
        this.#level = 1

    }
    get level(){
        return this.#level
    }

    obterInsignia() {
        if (this.#level >= 5){
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificaVencedor(personagem1, personagem2){
        if(personagem1.level === personagem2.level){
            return 'Empate!!!'
        }
        if (personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        if(personagem2.level > personagem1.level){
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
        }
    }
}