let pc = 5.79;
const gmk =  10;
let dsv = 100;

const r = (dsv/gmk) *pc;

const precoFormatado = r.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  console.log('A distância percorrida foi de ' + dsv + ' quilômetros, então o preço da viagem é de ' + precoFormatado);