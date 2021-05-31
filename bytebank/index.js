import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);  //objeto
const cliente2 = new Cliente("Alice", 88822233309);


// const cliente2 = new Cliente(); //objeto
// cliente2.nome = "Alice";
// cliente2.cpf = "11122233309";

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
const conta2 = new ContaCorrente(cliente2, 1002);


let valor = 200;
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(valor, conta2);


console.log(conta2, contaCorrenteRicardo);
