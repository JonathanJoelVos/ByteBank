import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.depositar(600);
contaCorrenteRicardo.sacar(100);
contaCorrenteRicardo.transferir(100, contaCorrente2);

console.log("---------")
console.log(contaCorrenteRicardo, contaCorrenteRicardo.clienteReturn)
console.log(contaCorrente2, contaCorrente2.clienteReturn)
console.log(ContaCorrente.numeroDeContas)


