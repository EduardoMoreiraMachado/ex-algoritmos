'use strict'

function media() {
    const valor1 = parseFloat(document.querySelector('#valor1').value);
    const valor2 = parseFloat(document.querySelector('#valor2').value);
    const valor3 = parseFloat(document.querySelector('#valor3').value);
    const valor4 = parseFloat(document.querySelector('#valor4').value);
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#result');

    if (form.reportValidity()){
        let status = '';
        let calc = (valor1 + valor2 + valor3 + valor4) / 4;

        if (calc >= 7){
            status = '<span class="verde">aprovado</span>';
            resultado.innerHTML = `Sua média bimestral foi ${calc.toFixed(2)} e você está ${status}`;
        }
        else{
            let valor5 = window.prompt('Nota do exame: ');
            let exame = (calc + parseFloat(valor5)) / 2;

            if(exame >= 7){
                status = '<span class="verde">aprovado</span>';
                resultado.innerHTML = `Sua média bimestral foi ${exame.toFixed(2)} e você está ${status}`;
            }
            else{
                status = '<span class="vermelho">reprovado</span>';
                resultado.innerHTML = `Sua média bimestral foi ${exame.toFixed(2)} e você está ${status}`;
            }
        }

    }
}

const calculate = document.getElementById('calcular').addEventListener('click', media);