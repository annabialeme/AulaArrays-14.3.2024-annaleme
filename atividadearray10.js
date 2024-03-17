//começamos com um array chamado pessoas contendo três objetos, onde cada objeto representa uma pessoa com atributos de nome e idade.
let pessoas = [
    { nome: 'João', idade: 25 },
    {
    
        nome: 'Maria', idade: 30 },
        { nome: 'Pedro', idade: 20 }
    ];
    // esta função é executada para cada elemento do array pessoas. Aqui, usamos uma função de seta que verifica se a idade da pessoa é igual a 30.
    let pessoa = pessoas.find(p => {
        return p.idade === 30;
    });

    //é atribuído à variável pessoa, que é então utilizada para acessar o nome da pessoa encontrada.
    console.log(pessoa.nome);