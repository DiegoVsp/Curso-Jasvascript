
function contarN() {
    let ini = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let pass = document.querySelector("#txtp");
    let res = document.querySelector("#res");

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...<br>';

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pass.value);

        if(p<=0){
            alert('Passo inválido! Considerando PASSO 1');
            p=1;
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;  //formatação unicode
            }
        }
        res.innerHTML += ` \u{1F3C1} `;

    }
}





