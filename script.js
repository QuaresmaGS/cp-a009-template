/*const nome = prompt("Qual o seu nome?")

const cor = prompt("Qual a sua cor favorita?")

let mensagem1 = "a cor favorita de " + nome + " é " + cor

let mensagem2 = `a cor favorita de ${nome} é ${cor}`

console.log(mensagem1)
console.log(mensagem2)

const citacao = prompt("qual é a sua citação favorita?")

mensagem1 = `${mensagem1}, e a citação favorita é "${citacao}"`

console.log(mensagem1)

mensagem2 = "Nome " + nome + 
"\nCor favorita: " + cor

mensagem2 = `Nome: ${nome}
Cor favorita: ${cor}`
console.log(mensagem2) 

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`)

console.log(` O nome possui a
 letra A: ${nome.includes("a")}`)*/

const nome = prompt("Qual o seu nome?");
const email = prompt("Qual o seu email?");

const mensagem1 = (`O seu email ${email} foi cadastrado com sucesso. \nBoas vindas, ${nome}. `);
console.log(mensagem1);

const mensagem2 = (`O seu nome possui ${nome.length} caractere(s) e, caso fossemos trocar \nas letras "r" por "l", então teriamos: ${mensagem1.replaceAll("r", "l")}`);
console.log(mensagem2);