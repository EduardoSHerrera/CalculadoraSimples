var valor1;
var valor2;
var total;

function soma(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);
    total = valor1 + valor2
    document.getElementById("resultado").value = total;
}

function subtracao(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);
    total = valor1 - valor2
    document.getElementById("resultado").value = total;
}

function multiplicacao(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);
    total = valor1 * valor2
    document.getElementById("resultado").value = total;
}

function divisao(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);
    total = valor1 / valor2
    document.getElementById("resultado").value = total;
}
