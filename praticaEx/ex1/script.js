function contar(){
    var ini = document.querySelector('#txtn');
    var fim = document.querySelector('#txtf');
    var passo = document.querySelector('#txtp');
    var r = document.querySelector('#res');


    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO!] preencha os campos em branco')
    }else{
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        r.innerHTML='Contando...<br>';

        for(var c = i; c <= f; c+=p){
            r.innerHTML +=` ${c} \u{1F600} `; 
        }
        for(var c=i; c>=f; c-=p){
            r.innerHTML+=` ${c} \u{1F600}`;
        }
        r.innerHTML+=`\u{1F610}`;
        
    }

}