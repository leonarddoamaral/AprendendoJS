const readline = require("readline-sync");

function inicio(){
    console.log('Olá ultimo romantico do planeta hoje você tem a impossivel missão de conquistar o Nathan...');
    let nome = readline.question("Primeiro diga o seu nome: ");
    console.log(`Bom então você é ${nome}, certo? Bom...de qualquer jeito,boa sorte` )
}


inicio();