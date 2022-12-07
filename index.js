import Exercicio1 from "./models/Exercicio1.js";
import Exercicio2 from "./models/Exercicio2.js";

const ex1 = new Exercicio1();
console.log(ex1.SOMA);

const ex2 = new Exercicio2(21);
console.log(ex2.buscaFibonacci());