//console.log('oi');

const robotron = document.querySelector("#robotron")

robotron.addEventListener('click', (evento) => {
    console.log(evento)
});

function dizOi (nome) {
    console.log("oi " + nome)
    console.log("Bem-Vindo")
};

dizOi("André")