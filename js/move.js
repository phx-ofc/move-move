//obtém referência do elemento #pardal
const PARDAL = document.querySelector("#pardal");

//define valores da posição inicial
PARDAL.style.top ="50px";
PARDAL.style.left ="500px";

function mover(direcao){

    //valores da posição atual do #pardal
     let top = parseInt(PARDAL.style.top);
     let left = parseInt(PARDAL.style.left);

     switch(direcao){

        case "^":
            case 38:
            top -= 5; //top = top - 5
            break;

        case "v":
            case 40:
            top += 5; //top = top + 5
            break;

        case "&lt;":
            case 37:
                left -= 5; 
                break;   
           
        case "&gt;":
            case 39:
            left += 5; 
            break;   
            
            default:
                console.log(direcao)

     }
     //atualiza os valores da posição do #pardal
     PARDAL.style.top = top +"px";
     PARDAL.style.left = left +"px";
}


document.body.onkeydown = function(tecla){
    mover(tecla.keyCode);
}