function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoParrafo = document.getElementById("texto-parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        textoParrafo.textContent = "";
    } 
    
    else { 
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        textoParrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto")
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoParrafo = document.getElementById("texto-parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
        .replace(/enter/gi, "e");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        textoParrafo.textContent = "";
    } 
    
    else { 
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        textoParrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto")
    }
}