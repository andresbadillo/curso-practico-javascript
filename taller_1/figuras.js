// Código del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm y " 
    + baseTriangulo + "cm, "
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("circulos")

const radioCirculo = 4;
console.log("El radio del círculo es de: " + radioCirculo + "cm")

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es de: " + diametroCirculo + "cm")

const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm")

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es de: " + areaCirculo + "cm^2")

console.groupEnd();