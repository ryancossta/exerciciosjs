
// Crie uma variável para armazenar seu nome completo
let nomecompleto = "Ryan Alves da Cunha Costa"
console.log(" Olá" + nomecompleto);

// Crie uma variável para armazenar se você gosta de programar (true ou false)

const  gosto = "true"
const nao = "false"
console.log(gosto + "\n" + nao);

// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5
const a =2;
const b = 3;
const c =4;
const d =5;

const e = a + (b * c) - d;
console.log(e);


//2 x (3 + 4) - 5 ÷ 5
const f = 2
const g = 3
const h = 4
const i = 5
const j = 5

const k = f * (g + h)- i / j;
console.log(k);

//{[(10 - 4) / 2] * 3} + 1

let expressao = ((10 - 4) / 2) * 3 + 1;
console.log(expressao)


//3 * 4 / 2 + 1 - 5
const a1 = 3
const b2 = 4
const c3 = 2
const d4 = 1
const e5 = 5

const f6 = a1 * b2 / c3 + d4 - e5;
console.log(f6);

//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
const titulo = " Da felicidade - Mario Quintana" ;
const poe =  "Quantas vezes a gente, em busca da ventura, Procede tal e qual o avozinho infeliz:" ;

const ema =  "Em vão, por toda parte, os óculos procura Tendo-os na ponta do nariz!" ;

console.log (`${titulo}`)
console.log (`${poe}`)
console.log (`${ema}`)




//Crie um programa que exiba a data atual formatada utilizando interpolação
const d2 = " dia 26/08"
const d1 = " ano de 2024"
console.log(`${d2}`,`${d1}`);




//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
console.log("Qual a área total do tiângulo?")
const base1 = 3
const base2 = 4

const altura1 = 9
const altura2 = 2

console.log("qual a área?\n" + `${base1 * altura1} ` + " ou " + ` ${base2 * altura2}`)

//Crie uma condicional para verificar se o caractere é uma vogal


const vogal = true

if(vogal){
    console.log("A letra A é uma vogal");
}
else{
    console.log("A letra A não é uma vogal")
}

//Crie uma condicional para verificar se o número é par ou é impar


let imparoupar = 8
 let imparoupar2 = 9

switch(imparoupar){
    case 8:
        console.log("número 8 é par");
        break;
        case 9:
            console.log("número 9 não é ímpar");
            break;
     
}

switch(imparoupar2){
    case 8:
        console.log("número 8 é par");
        break;
        case 9:
            console.log("número 9 é ímpar");
            break;
         
}



//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:







//Calcule a média do aluno e verifique se ele foi aprovado


  
  

// Crie uma variável para armazenar um array com seus hobbies
let hobbies = ["jiujitsu", "box", "muay thay", "capoeira", "academia"];

console.log(hobbies)


/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
*/

let frutas = [ "melão", "morango", "abacaxi", "laranja", "uva"];
console.log(" a segunda fruta é :", frutas[1]);
frutas.push("goiaba", "melancia"); //  PUSH adiciona elementos no fim de uma lista
frutas.shift(); // O SHIFT tira o primeiro elemento de uma lista
console.log(" as frutas agora são :", frutas);





/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
let nome = "Ryan"; // Ryan é uma String
let idade =  17; // 17 é um número



console.log( typeof nome,); 
console.log( typeof idade);




/* Crie um programa que simule uma calculadora simples.
 O usuário deve inserir dois números e um operador (+, -, *, /).
Utilize a estrutura switch para realizar a operação correspondente */

//parseFloat converte as strings obtidas em números.
