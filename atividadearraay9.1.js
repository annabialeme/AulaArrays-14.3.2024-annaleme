//começamos com cinco numeros
let numeros = [5, 6, 7, 8, 9];

// ele aceita dois parâmetros opcionais: o índice inicial (inclusive) e o índice final (exclusivo) da parte do array a ser extraída. Neste caso, estamos extraindo os elementos do índice 5(inclusive) ao índice 7 (exclusivo).
let subArray = numeros.slice(5, 7);

//cria um novo array chamado subArray, que contém os elementos do array original numeros no intervalo especificado. Neste caso, subArray conterá os elementos [5, 7].

// é atribuído à variável subArray, que é então impressa no console.
console.log(subArray);