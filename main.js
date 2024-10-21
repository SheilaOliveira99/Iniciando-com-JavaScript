alert("Hello World!");

let firstNumber = prompt('Olá, por gentileza, preencha seu primeiro número');
let secondNumber = prompt("Certo, agora preencha o seu segundo número, para a soma.");

// Converte para números
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

// Calcula a soma
let som = firstNumber + secondNumber;
alert("Sua soma resultou em " + som);

//  se a soma é um número
if (typeof som === 'number') {
    alert("É um número");
} else {
    alert("Não é um número");
}

// se uma variável é uma string
let minhaVariavel = prompt("Digite algo para verificar se é uma string:");

if (minhaVariavel === 'string') {
    alert("É uma string");
} else {
    alert("Não é uma string");
}

// se o seu valor é um booleano.
let numeroBooleano = prompt("Digite um número menor que 10");
numeroBooleano = Number(numeroBooleano);

if(numeroBooleano < "10") {
  alert("É booleano")
} else {
  alert("Não é booleano")
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberOne = prompt("Insira o seu primeiro número");
let numberTwo = prompt("Insira o seu segundo número para a subtração");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sub = numberOne - numberTwo;
  alert("Sua subtração resultou em " + sub);

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let number1 = prompt("Insira o primeiro número para realizar a multiplicação entre eles");
let number2 = prompt("Insira o segundo número para a multiplicação");

number1 = Number(number1);
number2 = Number(number2);

let mul = number1 * number2;
  alert("Sua multiplicação resultou em " + mul);

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let firstNumber1 = prompt("Insira o primeiro número para realizar a divisão entre eles");
let secondNumber2 = prompt("Insira o segundo número para a divisão");

firstNumber1 = Number(firstNumber1);
secondNumber2 = Number(secondNumber2);

let div = firstNumber1 / secondNumber2;
  alert("Sua divisão resultou em " + div);

// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
if ((div %2) == 0) 
{
  alert("É um número par!")
}

else 
{
  alert("Não é um número par.")
}
//. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

if ((div %2) != 0)
  {
    alert("É um número ímpar.")
  } 

else {
  alert("Não é um número ímpar.")
}