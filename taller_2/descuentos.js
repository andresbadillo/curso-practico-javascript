function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    {
        name: "I'm batman",
        discount: 10,
    },
    {
        name: "May the force be with you",
        discount: 20,
    },
    {
        name:  "You know nothing Jhon Snow",
        discount: 30,
    },
];

function calculateDiscount() {
    const precio = parseInt(document.getElementById("inputPrice").value);
    const couponValue = document.getElementById("inputCoupon").value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón <" + couponValue + "> no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
        const precioFinal = document.getElementById("FinalValue");
        precioFinal.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
    
}