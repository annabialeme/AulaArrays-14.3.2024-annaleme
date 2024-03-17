//começamos com dois arrays chamados array1 e array2, cada um contendo dois números.
let array1 = [1, 3];
let array2 = [5, 6];

//o array1 irá combinar com o array2

//ele aceita um ou mais parâmetros, que são os arrays a serem concatenados. Neste caso, estamos concatenando array2 ao array1.

//cria um novo array chamado newArray, que é o resultado da concatenação dos arrays originais array1 e array2. O array1 vem primeiro no novo array, seguido pelo array2.
let newArray = array1.concat(array2);

//o novo array resultante retornado pelo método concat é atribuído à variável newArray, que é então impressa no console.
console.log(newArray);