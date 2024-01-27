let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento ('p', `Felicidades! Acertaste en ${intentos} ${(intentos === 1)?' oportunidad' : ' oportunidades'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p', 'El numero secreto es menor!');
    }else {
        asignarTextoElemento ('p', 'El numero secreto es mayor!');
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{


    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}   
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juega con M');
    asignarTextoElemento ('p', `Adivina el numero! desde el 1 hasta el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang');

condicionesIniciales();






