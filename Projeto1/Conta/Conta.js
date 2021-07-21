// Classe abstrata - tem a função apenas de ser herdada, não de ser instanciada

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor === Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata!");
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

  }

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

// Método abstrato - feito p/ ser sobreescrito e não ser chamado diretamente
  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato.")
  }

  _sacar(valor, taxa) {

    const valorSacado = taxa * valor;

    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }


  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor) 
    conta.depositar(valorSacado) 
  }

  //teste(){
    //console.log("teste a classe conta")}
}



