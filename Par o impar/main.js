function verificarParidad() {
    let num = document.getElementById("numero").value;
    num = parseInt(num);

    let resultado = document.getElementById("resultado");

    if (isNaN(num)) {
        resultado.innerText = "Ingresa un número válido.";
        resultado.style.color = "#cc0066";
        return;
    }

    if (num % 2 === 0) {
        resultado.innerText = num + " es un número PAR.";
        resultado.style.color = "#ff3399";
    } else {
        resultado.innerText = num + " es un número IMPAR.";
        resultado.style.color = "#cc0066";
    }
}