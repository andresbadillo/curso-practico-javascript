// Código del cuadrado

console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
    if (lado1 == lado2) {
        const alturaTrianguloIsosceles = Math.sqrt((lado1 * lado1) - ((base / 2) * (base / 2)));
        return alturaTrianguloIsosceles;
    } else {
        console.error("Los lados A y B no son iguales");
    }
}

console.groupEnd();

// Código del círculo

console.group("circulos")

function diametroCirculo(radio) {
    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

// Aquí interactuamos con el html

function calcularPerimetroCuadrado() {
    const lado = parseInt(document.getElementById("inputCuadrado").value);

    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const lado = parseInt(document.getElementById("inputCuadrado").value);

    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLado1").value);
    const lado2 = parseInt(document.getElementById("inputLado2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = parseInt(document.getElementById("inputBase").value);
    const altura = parseInt(document.getElementById("inputAltura").value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularAlturaTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLadoA").value);
    const lado2 = parseInt(document.getElementById("inputLadoB").value);
    const base = parseInt(document.getElementById("inputLadoBase").value);

    const altura = alturaTriangulo(lado1, lado2, base);
    if (lado1 == lado2) {
        alert(altura);
    }
    else {
        alert("Los lados A y B no son iguales");
    }
}

function calcularDiametroCirculo() {
    const radio = parseInt(document.getElementById("inputCirculo").value);

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const radio = parseInt(document.getElementById("inputCirculo").value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("inputCirculo").value);

    const area = areaCirculo(radio);
    alert(area);
}