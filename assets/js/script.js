
        
function sortear(){
    let sorteio;
    let loto = new Array();
    let texto = 'Este são seus números da sorte:';
    let i=0;
    while (i < 15) {

        sorteio = Math.ceil(Math.random()*25);
        if(loto.indexOf(sorteio) < 0){
            loto.push(sorteio);
            i++;
        }
    }

    let background = document.getElementById("resultado--area");
    
    if(background.style.padding == '20px') {
        
    } else {
        background.style.padding = "20px";
    } 





    let loto2 = loto.join(' - ');
    document.getElementById("textoresultado").innerHTML = texto;
    document.getElementById("resultado").innerHTML=loto2;

    }
 