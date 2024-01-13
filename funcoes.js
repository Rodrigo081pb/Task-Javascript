
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

