'use strict'

function modulo() {
    const valor = document.querySelector('#valor').value;
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    if (form.reportValidity()){
        let calc;

        if (valor < 0){
            calc = valor * -1;
        }
        else{
            calc = valor;
        }

        resultado.innerHTML = `O módulo de ${valor} é <span class="azul">${calc}</span>`;
    }
}

const calculate = document.getElementById('calcular').addEventListener('click', modulo);