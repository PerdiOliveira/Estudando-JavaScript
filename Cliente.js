export class Cliente{
    nome;
    _cpf;               //molde, class não é hoisted, ou seja precisa ser declarada antes de ser chamada

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}