'use strict'

function diferenca() {
    const valor1 = document.querySelector('#valor1').value;
    const valor2 = document.querySelector('#valor2').value;
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    if (form.reportValidity()){
        let calc;

        if (valor1 > valor2){
            calc = valor1 - valor2;
        }
        else if (valor2 > valor1){
            calc = valor2 - valor1;
        }

        resultado.textContent = `A diferença do maior valor pelo menor valor é ${calc}`;
    }
}

const calculate = document.getElementById('calcular').addEventListener('click', diferenca);