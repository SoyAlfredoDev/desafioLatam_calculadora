const precio = document.querySelector('#precio');
const cantidad = document.querySelector('#cantidad');
const total = document.querySelector('#total');
const btnAumentar = document.querySelector('.aumentar')
const btnDisminuir = document.querySelector('.disminuir')

const precioValue = precio.value
const cantidadValue = cantidad.value

function calcularTotal() {
    const precioValue = precio.value || 0;
    const cantidadValue = cantidad.value || 0;
    total.value = precioValue * cantidadValue
}

function aumentarValor() {
    const cantidadValue = cantidad.value || 0;
    cantidad.value = Number(cantidadValue) + 1;
    calcularTotal()
}

function disminuirValor() {
    const cantidadValue = cantidad.value || 0;
    if (cantidadValue != 0) {
        cantidad.value = Number(cantidadValue) - 1;
        calcularTotal()

    }
}

calcularTotal()


precio.addEventListener('input', calcularTotal)
btnAumentar.addEventListener('click', aumentarValor)
btnDisminuir.addEventListener('click', disminuirValor)
