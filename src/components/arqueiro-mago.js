import { Personagem } from "../modules/personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
    ladoMago
    ladoArqueiro
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lancas e flechas mágicas!'

    constructor (nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.ladoMago = new Mago (nome, elementoMagico, levelMagico, inteligencia)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
    }
    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}