import {Cliente} from "./conta/Cliente.js"
import {ContaCorrente} from "./conta/ContaCorrente.js"
import {Conta} from "./conta/Conta.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);  //objeto
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);



console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
