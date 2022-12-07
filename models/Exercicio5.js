export default class Exercicio5 {
    _stringBase = '';

    constructor(stringBase) {
        if (!stringBase) throw 'Erro! Digite um texto para ser revertido';
        this._stringBase = stringBase;
    }

    get stringOriginal() {
        return this._stringBase;
    }

    get stringInversa() {
        let stringFinal = '';
        for (let i = this._stringBase.length - 1; i >= 0; i--) stringFinal += this._stringBase[i];
        return stringFinal;
    }

}