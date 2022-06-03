import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    #cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get clienteReturn() {
        return this.#cliente;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    #saldo = 0;

    get saldo() {
        return this.#saldo;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return valor;
        }
    };
    depositar(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}