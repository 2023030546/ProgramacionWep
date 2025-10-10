const opciones = document.getElementById('opciones')
const operador = document.getElementById('1b1op')
const txtnum1 = document.getElementById('txtNum1')
const txtnum2 = document.getElementById('txtNum2')
const resutaldo = document.getElementById('resultado')
const btnCalcular = document.getElementById('btnCalcular')

// declarar funcioes
// funcion para actualizar el operador

function mostrarOperador(){
    const item = parseInt(opciones.value)

    switch(item){
        case 1:
            operador.textContent = "+"
            break;
        case 2:
            operador.textContent = "-"
            break
        case 3:
            operador.textContent = "*"
            break;
        case 4:
            operador.textContent = "/"
            break
        default:
            operador.textContent = ''
    }
}

function calcular(){
    const num1 = parseFloat(txtnum1.value)
    const num2 = parseFloat(txtnum2.value)
    const item = parseInt(opciones.value)

    if( isNaN(num1) || isNaN(num2) ){
        resutaldo.textContent = "Favor de ingresar dos numeros"
        return
    }
    else{
    switch(item){
        case 1:
            resutaldo.textContent = num1+num2
            break;
        case 2:
            resutaldo.textContent = num1-num2
            break
        case 3:
            resutaldo.textContent = num1*num2
            break;
        case 4:
            resutaldo.textContent = num1/num2
            break
        default:
            resutaldo.textContent = ""
    }
    }

}

// codifixar los eventos

opciones.addEventListener('change', mostrarOperador)
btnCalcular.addEventListener('click', calcular)