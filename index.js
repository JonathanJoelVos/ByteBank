import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente;
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;


const cliente2 = new Cliente;
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(600);
contaCorrenteRicardo.sacar(100);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2;
contaCorrente2.agencia = 102;

contaCorrenteRicardo.transferir(100, contaCorrente2);
console.log(contaCorrente2);
console.log(contaCorrenteRicardo);