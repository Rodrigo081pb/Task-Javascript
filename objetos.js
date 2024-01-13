class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();



/*


class Pessoa {
    nome;
    peso;
    altura;
  
    constructor(nome, peso, altura) {
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
    }
  
    imc() {
      return this.peso / Math.pow(this.altura, 2);
    }
  
    classificar() {
      const imc = this.imc();
      if (imc <= 18.5) {
        return 'Abaixo do peso';
      } else if (imc > 18.5 && imc <= 25) {
        return 'Normal';
      } else if (imc > 25 && imc <= 30) {
        return 'Acima do peso';
      } else if (imc > 30 && imc <= 40) {
        return 'Obeso';
      } else if (imc > 40) {
        return 'Vai morrer FDP';
      }
    }
  }
  
  const rodrigo = new Pessoa('Rodrigo', 80, 1.80);
  const renan = new Pessoa('Renan', 70, 1.70);
  
  console.log(rodrigo.imc());
  console.log(rodrigo.classificar());
  console.log(renan.imc());
  console.log(renan.classificar());
  

  




Classes de carros


class Carro{
    marca;
    cor;
    GMedioKm;

    constructor(marca,cor,GMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.GMedioKm = GMedioKm; 
    }
    //Gasto médio de percurso em R$
    GmP(distancia,precoC){
        return distancia * this.GMedioKm * precoC;
    }
}

const celta = new Carro('Fiat','Vermelho',1/12);


console.log(celta.GmP(70,5));




Definição
class Pessoa {

    nome;
    idade;
    nascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function comparar(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const rodrigo = new Pessoa('Rodrigo', 19);
const pedro = new Pessoa('Pedro', 20);

comparar(rodrigo, pedro);


 Exemplos 
const joyce = new Pessoa('Joyce', 39);
const julya = new Pessoa('Julya', 40);

console.log(joyce);
console.log(julya);

/*  PRIMEIRA FORMA 
const rodrigo = new Pessoa();
rodrigo.nome = 'Rodrigo ] Black';
rodrigo.idade = 19;

const alan = new Pessoa();
alan.nome='Alan ] Vieira';
alan.idade= 20;

console.log(rodrigo);
console.log(alan);

/*
//Instância  
const rodrigo = {
    nome:'Rodrigo ] Black',
    idade:19,

    escrever: function(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

pessoa['nome'] = 'teste';
pessoa.nome='teste';

/* */