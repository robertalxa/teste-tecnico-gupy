export default class Exercicio2 {
    _numeroBuscado

    constructor(numeroBuscado) {
        this._numeroBuscado = numeroBuscado;
    }

    _seq = [0, 1];

    buscaFibonacci() {
        let contador = 2;

        while (this._numeroBuscado > this._seq[contador - 1]) {
            this._seq[contador] = this._seq[contador - 2] + this._seq[contador - 1];
            contador++;
        }

        return `O número ${this._numeroBuscado}${this._numeroBuscado === this._seq[(this._seq.length - 1)] ? '' : ' NÃO'} PERTENCE a sequência Fibonacci`;
    }
}