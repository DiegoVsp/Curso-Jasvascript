let numero = document.querySelector('#num');
let lista = document.querySelector('#selList');
let res = document.querySelector('#res');
let valores = [];




function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }

}

function add() {
    // verifica se é um número e se não está na lista
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value)); // adiciona número ao vetor
        
        let list = document.createElement('option');        
        list.text = `O ${numero.value} adicionado.`;        
        lista.appendChild(list);
        res.innerHTML='';

    } else {
        alert('inválido ou ja na lista');
    }
    numero.value ='';
    numero.focus();
}



function finalizar() {
    // if(numero.value == 0){
    //     res.innerHTML = '';
    //     res.innerHTML+= '';
    //     alert('digite um numero')
    // }else{
    //     let menor = Math.min(...valores);
    //     let maior = Math.max(...valores);
    //     res.innerHTML = `O menor número é ${menor}<br>`;
    //     res.innerHTML+= `O maior número é ${maior}`;
    
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let i in valores){
            soma +=valores[i];
            //media=soma/valores.length;

            if(valores[i] > maior){
                maior=valores[i];
            }
            if(valores[i]<menor){
                menor = valores[i];
            }
        }
        media=soma/total;
        res.innerHTML='';
        res.innerHTML+=`<p>Ao todo, temos ${total} número cadastrados.</p>`
        res.innerHTML+=`<p>O maior valor é ${maior}</p>`;
        res.innerHTML+=`<p>O menor valor é ${menor}</p>`;
        res.innerHTML+=`<p>A soma dos números é de ${soma}</p>`;
        res.innerHTML+=`<p>A média da soma dos valores é de ${media}</p>`;
    }
        
    
}