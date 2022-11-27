function ola (nome) {
    alert("Olá" + nome)
}

function bemVindo(){
    alert("Bem vindo!")
}


function adeus(){
    alert("Adeus até a próxima!")
}

function somar(){
    var valor1= parseFloat(document.getElementById('valor1').value)
    var valor2= parseFloat(document.getElementById('valor2').value)
    document.getElementById('resultado').innerHTML = valor1+valor2
}