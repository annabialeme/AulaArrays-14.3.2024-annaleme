//começamos com cinco numeros
let numeros = [2, 3, 5, 7, 9]; 

//Aqui usamos uma função de seta que verifica se o número é par (numero % 2 === 0).
let temPar = numeros.some(numero => numero % 2 === 0);

//verifica se pelo menos um dos elementos do array satisfaz a condição especificada pela função de callback. Se pelo menos um elemento satisfazer a condição, ele retorna true; caso contrário, retorna false.

//é atribuído à variável temPar, que é então impressa no console.
console.log(temPar);