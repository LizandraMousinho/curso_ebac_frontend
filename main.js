const form = document.getElementById('form-action');

function validaNumero (valorB, valorA) {
        return valorB > valorA?'formulário válido':'formulário inválido';

}

form.addEventListener('submit', function(e) {

        const valorA = document.getElementById('campoA');
        const valorB = document.getElementById('campoB');

        alert(validaNumero(valorB.value,valorA.value));
    })

