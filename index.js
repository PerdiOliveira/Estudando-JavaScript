class Cliente{
    nome;
    cpf;                           //molde, class não é hoisted, ou seja precisa ser declarada antes de ser chamada
}

class ContaCorrente{
    agencia;
    _saldo = 0;

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
}

const cliente1 = new Cliente();  //objeto
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";


const cliente2 = new Cliente(); //objeto
cliente2.nome = "Alice";
cliente2.cpf = "11122233309";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);


