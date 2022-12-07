import Exercicio1 from "./models/Exercicio1.js";
import Exercicio2 from "./models/Exercicio2.js";
import dados from "./data/dados.json" assert {type: 'json'};
import Exercicio3 from "./models/Exercicio3.js";
import Exercicio4 from "./models/Exercicio4.js";

console.log('\nEx1:');
const ex1 = new Exercicio1();
console.log(ex1.SOMA);

console.log('\nEx2:');
const ex2 = new Exercicio2(21);
console.log(ex2.buscaFibonacci());

console.log('\nEx3:');
const ex3 = new Exercicio3(dados);
console.log(`Os dias com menores valores de faturamento foram os dias ${ex3.buscaCondicionada('MENOR').map(dia => dia.dia)}`);
console.log(`Os dias com maiores valores de faturamento foram os dias ${ex3.buscaCondicionada('MAIOR').map(dia => dia.dia)}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal ${ex3.diasSuperioresMedia()}`);

console.log('\nEx4:');
const dadosDistrib = [
    {
        nome: 'SP',
        faturamento: 67836.43
    },
    {
        nome: 'RJ',
        faturamento: 36678.66
    },
    {
        nome: 'MG',
        faturamento: 29229.88
    },
    {
        nome: 'ES',
        faturamento: 27165.48
    },
    {
        nome: 'Outros',
        faturamento: 19849.53
    },
]
const ex4 = new Exercicio4(dadosDistrib);
ex4.calculaPorcentagemContribuicao();