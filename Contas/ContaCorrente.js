import { Conta } from "./Conta.js";

export class contaCorrente extends Conta {
  static numeroDeContas = 0;
  //# deixa o campo privado, esta em proposta ainda, não foi aprovado
  //_ deixa o campo privado por conveção, pois a proposta do # ainda nao foi aprovada. porem consegue alterar ele normalmente

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    contaCorrente.numeroDeContas += 1;
  }

  //sobreescrevendo o comportamento sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
