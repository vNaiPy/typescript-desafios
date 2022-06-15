"use strict";
;
var Profissao;
(function (Profissao) {
    Profissao["Programador"] = "Programador(a)";
    Profissao["Pintor"] = "Pintor(a)";
    Profissao["Mercador"] = "Mercador(a)";
    Profissao["Agricultor"] = "Agricultor(a)";
    Profissao["Engenheiro"] = "Engenheiro(a)";
    Profissao["Ator"] = "Ator(triz)";
    Profissao["Padeiro"] = "Padeiro(a)";
})(Profissao || (Profissao = {}));
;
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Programador
};
let pessoa2 = {
    nome: "José",
    idade: 24,
    profissao: Profissao.Engenheiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Ator
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
