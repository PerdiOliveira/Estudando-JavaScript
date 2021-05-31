import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){                  // criando uma operação dentro da classe
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        else{
            console.log("Você não tem saldo suficiente");
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
        else{
            console.log("valor para depósito é inválido");
        }
    }
    transferir(valor, recebedor){
        if (valor<this._saldo){
            console.log("Você não tem saldo suficiente para essa transferência");  //usei um early return para fazer uma verificação de que a pessoa tem saldo suficiente para essa operação, caso contrario a conta poderia ficar com um saldo negativo
            return
        }
        const valorsacado = this.sacar(valor);
        recebedor.depositar(valorsacado);
    }
}