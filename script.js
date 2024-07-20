function encriptar__Texto() {
    var input = document.getElementById("ingreso_Texto").value;
    var output = "";
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) + 1); // Cifrado simple
    }
    document.getElementById("salida_Texto").value = output;
  }
  
  function desencriptar__Texto() {
    var input = document.getElementById("salida_Texto").value;
    var output = "";
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) - 1); // Decifrado simple
    }
    document.getElementById("salida_Texto").value = output;
  }
  
  function copiar__Texto() {
    var output = document.getElementById("salida_Texto");
    output.select();
    output.setSelectionRange(0, 99999); /* para dispositivos móviles */
    document.execCommand("copy");
    alert("Texto copiado: " + output.value);
  }
  