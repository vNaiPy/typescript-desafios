// Como podemos melhorar o esse código usando TS? 
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao;
};

enum Profissao{
    Programador = "Programador(a)",
    Pintor = "Pintor(a)",
    Mercador = "Mercador(a)",
    Agricultor = "Agricultor(a)",
    Engenheiro = "Engenheiro(a)",
    Ator = "Ator(triz)",
    Padeiro = "Padeiro(a)"
};

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Programador
};


let pessoa2: Pessoa = {
    nome: "José",
    idade: 24,
    profissao: Profissao.Engenheiro
};

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Ator
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};