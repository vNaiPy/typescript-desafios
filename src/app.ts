let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;
let valor: number = 0;

campoSaldo.innerHTML = ` ${valor}`;

function somarAoSaldo(soma: number) {
    valor += soma;
    campoSaldo.innerHTML = ` ${valor}`;;
}

function limparSaldo() {
    valor = 0;
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
