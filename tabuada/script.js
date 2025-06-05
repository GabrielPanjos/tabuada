function multiplicar() {
    let multiplicando = document.getElementById("multiplicando").value
    let resultado = document.getElementById("resultado")

    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${i} x ${multiplicando} = ${i * multiplicando}<br>`
    }
}
