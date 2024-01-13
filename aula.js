/* EXERCÍCIOS

let pe = 5.79;
let pg = 6.66;
const gmkmPe = 10; // Consumo do carro com etanol por quilômetro
const gmkmPg = 10; // Consumo do carro com gasolina por quilômetro
let dsv = 100; // Distância percorrida

let Ccar = pg;

let Ug = (dsv / gmkmPg) * pg;

const precoFormatado = Ug.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

let Ue = (dsv / gmkmPe) * pe;

const precoFormatadoUe = Ue.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

if (Ccar === pg) {
  console.log('Já que você viajou comigo usando gasolina então o preço da sua viagem deu ' + precoFormatado);
} else {
  console.log('Já que você viajou usando o etanol o preço da sua viagem deu ' + precoFormatadoUe);
}


const numero=5;
const numeroDivisivelPor5 = (numero%5) ===0;

if (numero === 0) {
  console.log('O número é invalido');
} else if (numero === 5){
  console.log('O número é invalido');
} else {
  console.log('É numero par')
}


const numero = 1111;
const par = (numero % 2) === 0;

if (par){
  console.log('O número é par')
} else {
  console.log('É numero é impar');
}

Exercício média

let n1 = 5;
let n2 = 3;
let n3 = 3;

const media = (n1+n2+n3) / 3

if (media <5) {
  console.log('Reprovado')
} else if (media >=5 && media <=7){
  console.log ('Recuperação')
} else {
  console.log('Aprovado')
}

Exercicio de imc


let idade = 18;
let peso = 80.5;
let altura = 1.60;

const imc = peso / Math.pow(altura,2);/* Outra forma de fazer ao quadrado seria utilizando (altura*altura) 

if (imc <= 18.5) {
  console.log('Abaixo do peso');
} else if (imc > 18.5 && imc <= 25) {
  console.log('Normal');
} else if (imc > 25 && imc <= 30) {
  console.log('Acima do peso');
} else if (imc > 30 && imc <= 40) {
  console.log('Obeso');
} else if (imc > 40) {
  console.log('Vai morrer FDP');
}

EXERCICIO TIPO DE PAGAMENTO

const precoEtiqueta = 50;
const formaDePagamento = 4;

if(formaDePagamento === 1){
  console.log(precoEtiqueta - (precoEtiqueta *0.1));
} else if (formaDePagamento === 2){
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3){
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}


function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc <= 18.5) {
       return'Abaixo do peso';
      } else if (imc > 18.5 && imc <= 25) {
        return'Normal';
      } else if (imc > 25 && imc <= 30) {
        return'Acima do peso';
      } else if (imc > 30 && imc <= 40) {
        return'Obeso';
      } else if (imc > 40) {
        return'Vai morrer FDP';
      }    
}

(function main(){
    let idade = 18;
    let peso = 67.5;
    let altura = 1.73;
    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc))    
})();



// Outra forma de fazer ao quadrado seria utilizando (altura*altura) 




// Aulas 

function escreva(nome){
  return('Seu nome é  ' + nome);
}
//escreva('Kauã Rodrigo')



function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(escreva('Kauã Rodrigo') + ' e você é de maior');
  } else {
    console.log(escreva('Paulo') +' e você é de menor');
  }
}

verificaIdade(18);




function Aplicardesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
  console.log(Aplicardesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2){
  console.log(Aplicardesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3){
  console.log(precoEtiqueta);
} else {
  console.log(aplicarJuros(precoEtiqueta, 10));
}


*/

function calcularMedia(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));