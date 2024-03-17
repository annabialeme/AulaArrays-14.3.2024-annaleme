//começamos com cinco numeros
let numeros = [1, 2, 3, 4, 5];

// ele aceita dois parâmetros opcionais: o índice inicial (inclusive) e o índice final (exclusivo) da parte do array a ser extraída. Neste caso, estamos extraindo os elementos do índice 1(inclusive) ao índice 3 (exclusivo).
let subArray = numeros.slice(1, 3);

//cria um novo array chamado subArray, que contém os elementos do array original numeros no intervalo especificado. Neste caso, subArray conterá os elementos [1, 1].

// é atribuído à variável subArray, que é então impressa no console.
console.log(subArray);