var agora = new Date();

var hora = agora.getHours();
var minutes = agora.getMinutes();

console.log(`Agora são exatamente ${hora}:${minutes}.`);

if(hora>=6 && hora<12){
    console.log('Bom Dia!');
}else if(hora>=12 && hora<=18){
    console.log('Boa Tarde!');
}else if(hora < 6){
    console.log('Boa Madrugada!');
}else{
    console.log('Boa noite!');
}
