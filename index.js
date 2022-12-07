import Exercicio1 from "./models/Exercicio1.js";
import Exercicio2 from "./models/Exercicio2.js";
import dados from "./data/dados.json" assert {type: 'json'};
import Exercicio3 from "./models/Exercicio3.js";

const ex1 = new Exercicio1();
console.log(ex1.SOMA);

const ex2 = new Exercicio2(21);
console.log(ex2.buscaFibonacci());

const ex3 = new Exercicio3(dados);
console.log(`Os dias com menores valores de faturamento foram os dias ${ex3.buscaCondicionada('MENOR').map(dia => dia.dia)}`);
console.log(`Os dias com maiores valores de faturamento foram os dias ${ex3.buscaCondicionada('MAIOR').map(dia => dia.dia)}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal ${ex3.diasSuperioresMedia()}`);