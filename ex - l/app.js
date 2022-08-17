'use strict'

function maiormenor() {
    const valor = parseInt(document.querySelector('#valor').value);
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    if (form.reportValidity()){
        
        if (valor <= 3){
            resultado.textContent = `${valor}`;
        }
        else{
            resultado.textContent = 'Maior que 3';
        }
    }
}

const calculate = document.getElementById('calcular').addEventListener('click', maiormenor);