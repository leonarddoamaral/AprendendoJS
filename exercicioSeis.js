const chuva = Boolean(true);

function leva(){
    console.log("Esta chovendo leve guarda-chuva");
}
function naoLeva(){
    console.log("Hoje não esta chovendo, então não precisa levar guarda-chuva");
}
if(chuva){
    leva();
}
else{
    naoLeva();
}