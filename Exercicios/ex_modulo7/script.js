function verificar() {
    let numA = document.getElementById('numA');
    let numB = document.getElementById('numB');

    if( numA.value >= numB.value ) {
        alert('Erro!')
    } else {
        alert('Ok!')
    }
}