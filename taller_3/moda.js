function calculateModa() {
    const listaNumbers = document.getElementById("inputNumbers").value;
    let arrayNumbers = Array.from(listaNumbers.split(","),Number);

    const listaCount = {};

    arrayNumbers.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {return a[1] - b[1];}
    );
    
    const moda = listaArray[listaArray.length - 1];

    const finalResult = document.getElementById("FinalValue");
    finalResult.innerText = "La moda es el número: " + moda[0];
}