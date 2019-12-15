// n=2;

// for(let i = 0; i<=10;i++){

//     var r = n*i;
//     console.log(`${i} X ${n} = ${r}`);

// }





function gerarTabuada() {
    var nu = document.querySelector("#numero");
    var res = document.querySelector("#seltab");

    if (nu.value.length == 0) {
        alert('Por favor Digite um número');
    } else {
        var n = Number(nu.value);  
        res.innerHTML = "";

        for (var i = 0; i <= 10; i++) {
            let item = document.createElement('option');            
            item.text = ` ${n} X ${i} = ${i*n} `;
            item.res = `res${i}`; // comando caso for usar em PHP , para Javascript não faz muito sentido de usar
            res.appendChild(item);
        }
    }





}