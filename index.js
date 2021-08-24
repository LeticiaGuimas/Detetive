let nome = prompt("Digite seu nome para começarmos o jogo: ");

console.log('Um crime aconteceu e você ' + nome + ', está sendo investigado! \nVocê responderá algumas perguntas e no final diremos qual o seu nível de envolvimento com o crime. \nCuidado! Tudo que você disser poderá ser usado contra você no tribunal. \nVamos começar?');

let resposta1 = prompt('Primeira pergunta, você telefonou para a vítima? '); 
resposta1 = resposta1.toUpperCase() 

if(resposta1 === "SIM"){
resposta1 = 1;
} else if(resposta1 === "NÃO"){
resposta1= 0;
} else {
console.log("Ops, você respondeu algo errado. Responda as perguntas do interrogatório com sim ou não. Vamos começar de novo!")
}

let resposta2 = prompt('Segunda pergunta, você esteve no local do crime? ');
resposta2 = resposta2.toUpperCase()

if(resposta2 === "SIM"){
resposta2 = 1;
} else if(resposta2 === "NÃO"){
resposta2= 0;
} else {
console.log("Ops, você respondeu algo errado. Responda as perguntas do interrogatório com sim ou não. Vamos começar de novo!")
}

let resposta3 = prompt('Terceira pergunta, você mora perto da vítima? ');
resposta3 = resposta3.toUpperCase()

if(resposta3 === "SIM"){
resposta3 = 1;
} else if(resposta3 === "NÃO"){
resposta3= 0;
} else {
console.log("Ops, você respondeu algo errado. Responda as perguntas do interrogatório com sim ou não. Vamos começar de novo!")
} 

let resposta4 = prompt('Quarta pergunta, você devia para a vítima? ');
resposta4 = resposta4.toUpperCase()

if(resposta4 === "SIM"){
resposta4 = 1;
} else if(resposta4 === "NÃO"){
resposta4= 0;
} else {
console.log("Ops, você respondeu algo errado. Responda as perguntas do interrogatório com sim ou não. Vamos começar de novo!")
}

let resposta5 = prompt('Quinta e última pergunta, você já trabalhou com a vítima? ');
resposta5 = resposta5.toUpperCase()

if(resposta5 === "SIM"){
resposta5 = 1;
} else if(resposta5 === "NÃO"){
resposta5 = 0;
} else {
console.log("Ops, você respondeu algo errado. Responda as perguntas do interrogatório com sim ou não. Vamos começar de novo!")
}

let mediasoma = (resposta1 + resposta2 + resposta3 + resposta4 + resposta5);
//console.log(mediasoma)

if(mediasoma === 2){
console.log("Suspeito, arranje um advogado!");
}
else if(mediasoma === 3){
console.log("Cúmplice, ixi, melhor você ter um álibe!");
}
else if(mediasoma === 4){
console.log("Cúmplice, ixi, melhor você ter um álibe!");
}
else if(mediasoma === 5){
console.log("Assassino, você está preso!");
} 
else {
console.log("Inocente, ufa, pode ir para casa!");
}