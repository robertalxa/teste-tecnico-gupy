export default class Exercicio3 {
    _dados = [];

    constructor (dados) {
        this._dados = dados;
    }

    buscaCondicionada(condicao = '') {
        if (!condicao) {
            throw 'Escolha uma condição para a busca, "MAIOR" ou "MENOR"';
        }

        let menoresDias = [];
        let menorDia = this._dados[0] ? this._dados[0] : undefined;

        for (let dia of this._dados) {
            if (condicao === 'MAIOR') {
                if (dia.valor > menorDia.valor) menorDia = dia;
            } else if (condicao === 'MENOR') {
                if (dia.valor < menorDia.valor) menorDia = dia;
            } else {
                throw 'Escolha uma condição para a busca, "MAIOR" ou "MENOR"'
            }
        }

        //Buscando dias iguais
        for (let dia of this._dados) if (dia.valor === menorDia.valor) menoresDias.push(dia);

        return menoresDias;
    }

    diasSuperioresMedia() {
        let soma = 0;
        for (let dia of this._dados) soma += dia.valor;
        
        const media = soma / this._dados.length;        
        let diasSuperiores = this._dados.filter(dia => dia.valor > media);

        return diasSuperiores.length;
    }

}