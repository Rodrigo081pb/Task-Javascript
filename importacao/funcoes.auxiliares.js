const sorteio = [5, 50, 10, 98, 23,10000000000];
let i = 0;

function gets() {
    const valor = sorteio[i];
    i = i + 1; // ou i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets: gets, print: print };


//exportando o objeto que tem a função gets e print 
