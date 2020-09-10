function pintarNumero(numero){
    // document.getElementById("data").value = numero;
    // console.log(numero)
    pintarDatos(numero);
}
function pintarOperador(operador){
    // document.getElementById("data").value = operador;
    pintarDatos(` ${operador} `);
}
function pintarDatos(dato){
    let valorInput = document.getElementById("data");
    //valorInput.value = valorInput.value + " " + dato;
    valorInput.value = `${valorInput.value}${dato}`;

}
function limpiarInput(){
    let valorInput = document.getElementById("data").value = null;
}

function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ');
    // if(arreglo[1] == "+"){
    //     let suma = parseInt(arreglo[0])+ parseInt(arreglo[2]);
    //     document.getElementById('data').value = suma;
    // }else if(arreglo[1]== "-"){
    //     let resta = parseInt(arreglo[0])- parseInt(arreglo[2]);
    //     document.getElementById('data').value = resta;
    // }else if(arreglo[1] == "*"){
    //     let division = parseInt(arreglo[0]) / parseInt(arreglo[2]);
    //     document.getElementById('data').value = division;
    // }else{
    //     let multi = parseInt(arreglo[0]) * parseInt(arreglo[2]);
    //     document.getElementById('data').value = multi;
    // }
    switch(arreglo[1]){
        case '+':
            let suma = parseInt(arreglo[0])+ parseInt(arreglo[2]);
            document.getElementById('data').value = suma;
        break;
        case '-':
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2]);
            document.getElementById('data').value = resta;
        break;
        case '*':
            let multi = parseInt(arreglo[0]) * parseInt(arreglo[2]);
            document.getElementById('data').value = multi;
        break;
        case '/':
            let division = parseInt(arreglo[0]) / parseInt(arreglo[2]);
            document.getElementById('data').value = division;
        break;
    }
}

function preguntarDias(){
    let pregunta = prompt('Hola, ingresa un dia de la semana').toLowerCase();
    if(pregunta == '1' || pregunta == 'lunes'){
        alert('Pienso que el lunes es bastante aburrido :c');
    }else if(pregunta == '2' || pregunta == 'martes'){
        alert('Martes es un mejor dia vamos con energia');
    }else if(pregunta == '3' || pregunta == 'miercoles'){
        alert('miercoles suena a una mala palabra :o ');
    }else if(pregunta == '4' || pregunta == 'jueves'){
        alert('Jueves suena a jupiter gran planeta :3');
    }else if(pregunta == '5' || pregunta == 'viernes'){
        alert('ES VIERNES Y EL CUERPO LO SABEEEEE \°-°/')
    }else if(pregunta == '6' || pregunta == 'sabado'){
        alert('Ya no se que mas inventarme pero es sabadukisssssss c:');
    }else if(pregunta == '7' || pregunta == 'domingo'){
        alert('descansa este dia pasa muy rapido :c domingo');
    }else{
        alert('Eso no es un día compañer@ a mi no me engañas ¬.¬');
    }
}