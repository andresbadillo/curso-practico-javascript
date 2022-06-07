/* Creo el Array */
const arrayCalificacion = [];

function loadArray() {
    /* Leo los datos escritos en el input y los cargo */
    const materias = document.getElementById("selectMaterias");
    const listaMaterias = materias.selectedOptions[0].text;
    const listaNumbers = document.getElementById("inputNumber").value;
    const listaCredits = document.getElementById("inputCredits").value;
    
    /* Creo el objeto */
    const calificacionPonderada = new Object();
    calificacionPonderada.materia = listaMaterias;
    calificacionPonderada.nota = Number(listaNumbers);
    calificacionPonderada.creditos = Number(listaCredits);

    /* Empujo los datos convertidos en número (incluido decimal) al final del array */
    arrayCalificacion.push(calificacionPonderada);

    console.log(arrayCalificacion);
}

function calculatePonderado() {
    /* Multiplicar cada nota por su peso en créditos */
    const notesWithCredit = arrayCalificacion.map(
        function (noteObject) {
            return noteObject.nota * noteObject.creditos;
        }
    );

    /* Sumo todos los elementos de las notas multiplicadas por su peso en créditos */
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    /* Creamos un arreglo solo con los créditos */
    const credits = arrayCalificacion.map(
        function (noteObject) {
            return noteObject.creditos;
        }
    );

    /* Sumamos los créditos */
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    /* Dividimos ambas sumas */
    const promedioPonderado = (sumOfNotesWithCredit / sumOfCredits).toFixed(2);
    
    /* Publicamos el resultado */
    const finalResult = document.getElementById("FinalValue");
    finalResult.innerText = "El promedio ponderado es: " + promedioPonderado;
}

