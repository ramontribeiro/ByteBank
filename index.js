import { cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// import { contaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaPoupanca.js";

// const cliente1 = new cliente("Ricardo", 1111111111);
// // const cliente2 = new cliente("Alice", 2222222222);

// const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);

const diretor = new Diretor("Rodrigo", 10000, 1232314123);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 523577667);
gerente.cadastrarSenha("123");

const Cliente = new cliente("Lais", 53452363, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(Cliente, "456");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
