/* Obtener los Objetos */

const parrafo = document.getElementById('parrafo')
const btnMay = document.getElementById('btnMay')
const btnMin = document.getElementById('btnMin')
const btnAgregar = document.getElementById('btnAgregar')
const btnJustificar = document.getElementById('btnJustificar')
const btnCancelar = document.getElementById('btnCancelar')

var col = parrafo.style.color
var tmf = parrafo.style.fontSize
var backcolor = parrafo.style.backgroundColor
var just = parrafo.style.textAlign
var mar = parrafo.style.margin



function cambiar(){
    parrafo.style.color = 'red'
    parrafo.style.fontSize = '30px'
    parrafo.style.backgroundColor = 'yellow'
}

function normal(){
    parrafo.style.color = col
    parrafo.style.fontSize =  tmf
    parrafo.style.backgroundColor = backcolor
}

function mayuscula(){
    parrafo.textContent = parrafo.textContent.toUpperCase()
}

function minusculas(){
    parrafo.textContent = parrafo.textContent.toLocaleLowerCase()
}

function agregarTxt(){
    let txt = txtTexto.value
    parrafo.innerText = parrafo.innerText + txt
}

function justificar(){
    parrafo.style.textAlign = 'justify'
    parrafo.style.margin = '10em'
}

function normalbtn(){
    parrafo.style.textAlign = just
    parrafo.style.margin = mar
}

/* Codificar los eventos del parrafo*/

parrafo.addEventListener('mouseover', cambiar)
parrafo.addEventListener('mouseout', normal)

btnMay.addEventListener('click', mayuscula)
btnMin.addEventListener('click', minusculas)

btnAgregar.addEventListener('click', agregarTxt)

/* agregar un boton donde se codifique el evento click
 y llame a la funcion justificar el texto del parrafo y de dara un margen de 3em*/

 btnJustificar.addEventListener('click',justificar)
 btnCancelar.addEventListener('click' ,normalbtn)





