import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {Conta} from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);  //objeto
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const novaConta = new Conta(0, cliente1,1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
console.log(novaConta);