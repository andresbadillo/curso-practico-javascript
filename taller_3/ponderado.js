/* Creo los Array */
const arrayMaterias = [];
const arrayNumbers = [];
const arrayCredits = [];

function loadArray() {
    /* Leo los datos escritos en el input y los cargo */
    const materias = document.getElementById("selectMaterias");
    const listaMaterias = materias.selectedOptions[0].text;
    const listaNumbers = document.getElementById("inputNumber").value;
    const listaCredits = document.getElementById("inputCredits").value;

    /* Empujo los datos convertidos en número (incluido decimal) al final del array */
    arrayMaterias.push(listaMaterias);
    arrayNumbers.push(Number(listaNumbers));
    arrayCredits.push(Number(listaCredits));

    console.log(arrayMaterias);
    console.log(arrayNumbers);
    console.log(arrayCredits);
}

