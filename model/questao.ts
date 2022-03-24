import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[] //variavel que recebe um lista de respostas
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }
    
    get enunciado() {
        return this.#enunciado
    }
    
    get respostas() {
        return this.#respostas
    }
    
    get acertou() {
        return this.#acertou
    }

    //metodo que verifica se a questão não esta respondida
    get naoRespondida() {
        return !this.respondida
    }

    //metodo que verifica se a questão esta respondida
    get respondida() {
        for(let resposta of this.#respostas) {
            if(resposta.revelada == true) return true
            //if(resposta.revelada) return true
        }
        return false
    }

    respoderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa            
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this. enunciado, respostas, acertou)
    }

    //método que embaralha as resposta e passa essa lista pra uma nova questão
    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou )
    }

    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    //metodo que transforma uma questão num objeto json
    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
            acertou: this.#acertou
        }
    }
}