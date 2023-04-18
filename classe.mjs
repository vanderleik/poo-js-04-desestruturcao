export class UmaClasse{
    #_umAtributo
    outroAtributo = "atributo dois"
    
    constructor(n) {
        this.#_umAtributo = n;
    }

    capturarPrimeiroAtributo(){
        return this.#_umAtributo;
    }
}