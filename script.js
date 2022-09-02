
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


var inputText = document.querySelector(".inputText");
var inputmensaje = document.querySelector(".mensaje");

var vocales = ["e","i","a","o","u"];
var palabras = ["enter","imes","ai","ober","ufat"];


function encriptar() {
    
    let textEncriptar = inputText.value.toLowerCase();
    let resultado = "";

    for(var i = 0; i <textEncriptar.length; i++) {
      
        if (vocales.indexOf(textEncriptar[i])!= -1) {
            resultado += palabras[(vocales.indexOf(textEncriptar[i]))]
        } else {
            resultado += textEncriptar[i];
        }
        
    }
    document.querySelector(".muneco").style.display = "none";
    
    inputmensaje.value = resultado
    inputText.value = "";
    
}

function desencriptar() {
    let resultado = inputText.value;

    for(let i = 0; i <palabras.length; i++) {
        resultado = resultado.replaceAll(palabras[i], vocales[i]);

    }

    
    inputmensaje.value = resultado;
    inputText.value="";
}




function copiar() {
    
    inputmensaje.select();
    inputmensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    inputmensaje.value = "";
}

