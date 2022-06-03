export class ContaCorrente {
    agencia;
    cliente;

    #saldo = 0;
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(this.#saldo)
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