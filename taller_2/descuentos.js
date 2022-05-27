function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calculateDiscount() {
    const precio = parseInt(document.getElementById("inputPrice").value);
    const descuento = parseInt(document.getElementById("inputDiscount").value);

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const precioFinal = document.getElementById("FinalValue");
    precioFinal.innerText = "El precio con descuento es: $" + precioConDescuento;
}