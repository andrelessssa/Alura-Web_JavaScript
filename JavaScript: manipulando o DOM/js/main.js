//console.log('oi');

//const robotron = document.querySelector("#robotron")

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll('.controle-ajuste')
console.log(controle)

somar.addEventListener("click" , (evento) => {
    manipulaDados('somar')
    //braco.value = parseInt(braco.value) + 1
});

subtrair.addEventListener("click" , (evento) => {
    manipulaDados('subtrair')
    //braco.value = parseInt(braco.value) - 1
});

function manipulaDados (operacao) {
    if (operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1

    }else
    braco.value = parseInt(braco.value) + 1
}


//robotron.addEventListener('click', (evento) => {
//    console.log(evento)
//});

//function dizOi (nome) {
//    console.log("oi " + nome)
//    console.log("Bem-Vindo")
//};

//dizOi("André")