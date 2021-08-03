const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

const formulario = document.getElementById("formulario")

const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")

function somador() {
    if (numero1.value !== ''&& numero2.value !== '') {
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
        formulario.classList.add('somar')
        formulario.classList.remove('subtrair')
        formulario.classList.remove('multiplicar')
        formulario.classList.remove('dividir')
    } else{
        alert("Preencha os campos")
    }
}

function subtrador() {
    if (numero1.value !== ''&& numero2.value !== '') {
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
        formulario.classList.remove('somar')
        formulario.classList.add('subtrair')
        formulario.classList.remove('multiplicar')
        formulario.classList.remove('dividir')
    } else{
        alert("Digite os números")
    }
}

function multiplicador() {
    if (numero1.value !== ''&& numero2.value !== '') {
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
        formulario.classList.remove('somar')
        formulario.classList.remove('subtrair')
        formulario.classList.add('multiplicar')
        formulario.classList.remove('dividir')
    } else{
        alert("Digite os números")
    }
}

function divisor() {
    if (numero1.value !== ''&& numero2.value !== '') {
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
        formulario.classList.remove('somar')
        formulario.classList.remove('subtrair')
        formulario.classList.remove('multiplicar')
        formulario.classList.add('dividir')
    } else{
        alert("Preencha os campos")
    }
}

somar.addEventListener("click", somador)
subtrair.addEventListener("click", subtrador)
multiplicar.addEventListener("click", multiplicador)
dividir.addEventListener("click", divisor)