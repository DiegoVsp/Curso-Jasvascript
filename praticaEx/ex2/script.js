function gerar(){
    let num = document.querySelector('#n');
    let tab = document.querySelector('#seltab');

    if(num.value.length == 0){
        alert('POR FAVOR DIGITE UM NÚMERO')
    }else{
        let n = Number(num.value);

        tab.innerHTML='';
        for(let c = 0; c<=10; c++){            
            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${n*c}`;
            item.tab=`tab${c}`;
            tab.appendChild(item);
            
        }

    }

}