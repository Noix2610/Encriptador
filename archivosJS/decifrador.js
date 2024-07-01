// Función para encriptar el texto
function encryptText() {
    let inputText = document.getElementById('textInput').value;

    if (inputText != "") {
        if (!validarTexto(inputText)) {
            // Reemplazar cada letra según las reglas de encriptación
            let encryptedText = inputText.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');

            // Mostrar el texto encriptado en el área de salida
            document.getElementById('output').innerHTML = encryptedText;
            showCopyButton();
        }
    }
}

// Función para desencriptar el texto
function decryptText() {
    let inputText = document.getElementById('textInput').value;
    if (inputText != "") {
        if (!validarTexto(inputText)) {

            // Reemplazar cada código encriptado con su letra correspondiente
            let decryptedText = inputText.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

            // Mostrar el texto desencriptado en el área de salida
            document.getElementById('output').innerHTML = decryptedText;
            showCopyButton();
        }
    }
}

function showCopyButton() {
    let copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'block'; // Mostrar el botón
}

function contieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
}

function contieneAcentos(texto) {
    return /[áéíóúÁÉÍÓÚ]/.test(texto);
}

function validarTexto(texto) {
    var flag = true;
    flag = contieneMayusculas(texto);
    if (!flag) {
        flag = contieneAcentos(texto);
        if(flag){
            mensaje('El texto no debe contener caracteres con acento.')
        }
    } else {
        mensaje('El texto no debe contener mayúsculas.')
        return flag;
    }
    
    return flag;
}

// Función para copiar el texto al portapapeles
function copyText() {
    let outputText = document.getElementById('output').innerText;

    // Crear un elemento temporal para seleccionar y copiar el texto
    let tempInput = document.createElement('textarea');
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Crear un elemento para el mensaje
    mensaje('Texto copiado en el portapeles.');
}

function mensaje(textoMensaje) {
    let messageElement = document.createElement('div');
    messageElement.classList.add('fade-message');
    messageElement.textContent = textoMensaje;
    document.body.appendChild(messageElement);

    // Centrar el mensaje en la parte inferior central
    messageElement.style.position = 'fixed';
    messageElement.style.bottom = '20px';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translateX(-50%)';
    messageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    messageElement.style.color = 'white';
    messageElement.style.padding = '10px 20px';
    messageElement.style.borderRadius = '8px';
    messageElement.style.zIndex = '9999';
    messageElement.style.opacity = '0';

    // Animación de desvanecimiento
    setTimeout(function () {
        messageElement.style.transition = 'opacity 0.5s ease';
        messageElement.style.opacity = '1';
    }, 100);

    // Eliminar el mensaje después de un tiempo
    setTimeout(function () {
        messageElement.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(messageElement);
        }, 500); // Tiempo de la animación
    }, 3000); // 3000 milisegundos = 3 segundos
}


