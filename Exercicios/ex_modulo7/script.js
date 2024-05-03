function verificar() {
    let numA = document.getElementById('numA');
    let numB = document.getElementById('numB');
    let mensagemErro = `Erro! - Valo de (B) precisa ser maior que valor de (A)!`
    let mensagemSucesso = `Ok! Valores Validos!`
    let resMsg = document.querySelector('.res-msg');

    if( Number(numB.value) <= Number(numA.value) ) {

        resMsg.innerHTML = mensagemErro;
        resMsg.style.color = 'red';
        resMsg.style.display = 'block';

    } else {
        mensagemErro = '';

        resMsg.innerHTML = mensagemSucesso;
        resMsg.style.color = 'green';
        resMsg.style.display = 'block';
    }
}