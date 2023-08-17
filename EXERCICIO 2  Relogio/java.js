function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var msg2 = document.getElementById('msg2')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
 
    
   if(hora >=0 && hora < 12){
       //bomdia
       img.src = 'img/diacirculo.png'
       document.body.style.backgroundColor ='#00BFFF'
       msg2.innerHTML = `<strong>BOM DIA!</strong>`

   }else if (hora >=12 && hora <= 18){
        //boa tarde
        img.src = 'img/tardeciruclo.png'
        document.body.style.backgroundColor ='#F4A460'
        msg2.innerHTML = `<strong>BOA TARDE!</strong>`
        
   }else{
    //boa noite
        img.src = 'img/tnoitecirculo.png'
        document.body.style.backgroundColor ='#4F4F4F'
        msg2.innerHTML = `<strong>BOA NOITE!</strong>`
   }


 
}

