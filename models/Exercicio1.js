export default class Exercicio1 {
    _INDICE = 13;
    _SOMA = 0;
    _K = 0;

    constructor() {
        while (this._K < this._INDICE) {
            this._K++;
            this._SOMA += this._K;
        }
    }

    get SOMA () {
        return `O valor da variável "SOMA" é ${this._SOMA}`;
    }
}