'use strict'

function divisores() {
    const valor1 = parseInt(document.querySelector('#valor1').value);
    const valor2 = parseInt(document.querySelector('#valor2').value);
    const valor3 = parseInt(document.querySelector('#valor3').value);
    const valor4 = parseInt(document.querySelector('#valor4').value);
    let divisor1 = '';
    let divisor2 = '';
    let divisor3 = '';
    let divisor4 = '';
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    if (form.reportValidity()){
        
        if (valor1 % 2 == 0 || valor1 % 3 == 0){
            divisor1 = valor1;
        }
        if(valor2 % 2 == 0 || valor2 % 3 == 0){
            divisor2 = valor2;
        }
        if(valor3 % 2 == 0 || valor3 % 3 == 0){
            divisor3 = valor3;
        }
        if(valor4 % 2 == 0 || valor4 % 3 == 0){
            divisor4 = valor4;
        }
        resultado.textContent = `${divisor1} ${divisor2} ${divisor3} ${divisor4}`;
    }
}

const calculate = document.getElementById('calcular').addEventListener('click', divisores);