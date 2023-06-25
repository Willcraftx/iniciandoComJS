/* 1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
console.log('Hello world!')


/* 2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */
let k = 4
let l = 2
const sum = k + l
console.log(sum)


/* 3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". */
let a = 12;
if (typeof a === 'number') {
  console.log("É um numero!");
} else {
  console.log("Não é um número");
}

/* 4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */
const str = "alice";
if (typeof str == "string") {
  console.log("É uma String");
} else {
  console.log("Não é uma string");
}

/*  5- Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */
  let bool = true
  if(typeof bool == 'boolean' ){
    console.log("E um booleano");
  } else {
    console.log("Nao e booleano");
  }

  /* 6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */

  let f = 15
  let g = 8 
  const sub = f - g
  console.log(sub)

  /* 7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */

  let y = 5
  let z = 2
  const multi = y * z
  console.log(multi)

  /* 8- Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */

  let p = 25
  let q = 5
  const div = p / q
  console.log(div)

  /* 9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */

  let evenNum = 32 
  if(evenNum % 2 == 0){
    console.log("Numero Par")
  } else {
    console.log("Nao e um numero par")
  }

  /* 10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

  let oddNum = 15
  if(oddNum % 2 != 0) {
    console.log('É um número ímpar')
  } else {
    console.log('Não é um número ímpar')
  }