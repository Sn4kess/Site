
/* parte do botão SOBRE O SITE */
document.getElementById('botãoinfo').addEventListener('click', function() {
    document.getElementById('caixa').classList.add('mostrar');
});

document.getElementById('fechar').addEventListener('click', function() {
    document.getElementById('caixa').classList.remove('mostrar');
});
