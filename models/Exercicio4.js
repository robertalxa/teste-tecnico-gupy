export default class Exercicio4 {
    _dadosDist = [];

    constructor(dados) {
        this._dadosDist = dados;
    }

    calculaPorcentagemContribuicao() {
        let arrecadacaoTotal = 0;
        for (let estado of this._dadosDist) {
            arrecadacaoTotal += estado.faturamento;
        }

        return this._dadosDist.filter(estado => console.log(`O estado "${estado.nome}" representa ${((100 * estado.faturamento) / arrecadacaoTotal).toFixed(2)}% da arrecadação total`));
    }
}