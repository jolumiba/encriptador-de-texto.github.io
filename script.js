function validar__Texto(texto) {
    //Validamos el texto requerido para que sean solo minúsculas y espacios
    //
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar__Texto() {
    var texto = document.getElementById("ingreso_Texto").value;
    
    if (!validar__Texto(texto)) {
        alert("El texto solo debe contener letras minúsculas y espacios...");
        return;
    }
    
    // Se pasa el texto ingresado a la variable output para reemplazar las vocales de acuerdo
    // a lo requerido por el encriptado

    let output = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("salida_Texto").value = output;
}
  
function desencriptar__Texto() {
        
    // Se pasa el texto de salida  ingresado a la variable output para reemplazar las letras de acuerdo
    // a lo requerido por el desencriptado
    let output = document.getElementById("salida_Texto").value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("salida_Texto").value = output;
}
  
function copiar__Texto() {
    var output = document.getElementById("salida_Texto");
    output.select();
    output.setSelectionRange(0, 99999); /* para dispositivos móviles */
    document.execCommand("copy");
    alert("Texto copiado: " + output.value);
}
  