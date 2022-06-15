"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let valor = 0;
campoSaldo.innerHTML = ` ${valor}`;
function somarAoSaldo(soma) {
    valor += soma;
    campoSaldo.innerHTML = ` ${valor}`;
    ;
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
