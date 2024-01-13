const { gets, print } = require('./funcoes.auxiliares');
// Forma Simples

let maiorV = 0;

for (let i = 0; i <6; i++){
    const numeroS = gets();
    if (numeroS > maiorV){
        maiorV = numeroS;
    }
}

print(maiorV);

/* Segunda forma pra mostrar a lista
const numerosS = [];

for (let i = 0; i < 6 ; i++) {
    const numero = gets(); 
    numerosS.push(numero); // Adicionando o número gerado ao array
}

let maiorV = numerosS[0]; // Inicializando a variável com o primeiro elemento do array

for (let i = 1; i < numerosS.length; i++) { // Começando a iteração a partir do segundo elemento
    const numero = numerosS[i];
    if(numero > maiorV){
        maiorV = numero;
    }
}

print(maiorV);
*/

