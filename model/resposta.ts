export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    //metodo que recebe a descrição da resposta e define o atributo #certa como verdadeira
    static certa(valor: string) {
        return new RespostaModel(valor, true)
    }

    //metodo que recebe a descrição da resposta e define o atributo #certa como falso    
    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor        
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    //metodo que muda o status
    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    //metodo que transforma uma resposta num objeto json
    paraObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}