
function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calculateMediana() {
    const listaNumbers = document.getElementById("inputNumbers").value;
    let arrayNumbers = Array.from(listaNumbers.split(","),Number);

    arrayNumbers.sort(function(a, b) {return a - b;});

    const arrayLista = parseInt(arrayNumbers.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(arrayNumbers.length)) {
        const elemento1 = arrayNumbers[arrayLista - 1];
        const elemento2 = arrayNumbers[arrayLista];

        const promedioElementos = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])

        mediana = promedioElementos;
    } else {
        mediana = arrayNumbers[arrayLista];
    }

    const finalResult = document.getElementById("FinalValue");
    finalResult.innerText = "La mediana es de: " + mediana;
}