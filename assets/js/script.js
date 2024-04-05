function sortearLoto(){
    let sorteio;
    let loto = new Array();
    let texto = 'Este são seus números da sorte:';
    let button = 'Sortear novamente';
    let i=0;
    
    while (i < 15) {

        sorteio = Math.ceil(Math.random()*25);
        if(loto.indexOf(sorteio) < 0){
            loto.push(sorteio);
            i++;
        }
    }

    let background = document.querySelector(".resultado--area");
    
    if(background.style.padding == '20px') {
        
    } else {
        background.style.padding = "20px";
    } 

    let resultado = loto.join(' - ');
    document.querySelector(".textoresultado").innerHTML = texto;
    document.querySelector(".resultado").innerHTML=resultado;
    document.querySelector(".button").textContent=button;

}

function sortearMega(){
    let sorteio;
    let loto = new Array();
    let texto = 'Este são seus números da sorte:';
    let button = 'Sortear novamente';
    let i=0; 
    while (i < 6) {
    
        sorteio = Math.ceil(Math.random()*60);
        if(loto.indexOf(sorteio) < 0){
            loto.push(sorteio);
            i++;
        }
    }
    
     let background = document.querySelector(".resultado--area");
        
     if(background.style.padding == '20px') {
          
     } else {
            background.style.padding = "20px";
        } 
    
    let resultado = loto.join(' - ');
    document.querySelector(".textoresultado").innerHTML = texto;
    document.querySelector(".resultado").innerHTML=resultado;
    document.querySelector(".button").textContent=button;
    
}