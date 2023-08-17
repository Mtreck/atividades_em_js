let num = document.getElementById('fnum')
let list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function islista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isnumero(num.value) && !islista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já existente na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione um valor')
    }else{
    }
}