import { Conta } from "./Conta.js";

// extends = todo o código da Conta será herdado aqui na ContaCorrente
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) { 
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  //aqui estamos especializando o comportamento desta parte do código - estamos sobreescrevendo o método de sacar da classe mãe (Conta) | o this se refere à classe mãe que está sendo herdada neste arquivo
  sacar(valor) {
    let taxa = 1.1; 
    return this._sacar(valor, taxa);
  }

  //teste() {
    //super.teste(); - isso irá chamar o teste da classe mãe (Conta) | a função foi chamada pela contaCorrenteRicardo (que é da subclasse ContaCorrente, que é filho da classe Conta, por isso o super foi usado aqui -  então é fluxo é: chamada no index, vem p/ ContaCorrente, executa o super.teste(), que vai p/ a Conta e volta pra cá)
    //console.log("teste na classe conta corrente");}

}


