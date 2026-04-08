const pessoa = {
    nome: "Suellen",
    sobrenome: "Sanches De Melo Martins",
    idade: 17,  
    Altura: "161cm",
    nomeCompleto: function () {return this.nome + " " + this.sobrenome},
    meuObjeto: function () {return this}


};


const pessoasStringficada = JSON.stringify(pessoa)
console.log (pessoasStringficada)

const pessoaParseada = JSON.parse(pessoasStringficada)

console.log( pessoaParseada.nome + " " +  pessoaParseada.sobrenome + " tem " +  pessoa.idade +  " anos" + " e mede " + pessoa.Altura )