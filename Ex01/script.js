function calcularDesconto(){
    let valor = document.getElementById("valor_compra").value;
    let dados = document.getElementById("dados");
    dados.innerHTML = "";
    let numero = parseFloat(valor);
    let desc = 0;

    if(!isNaN(numero)){
        if(valor > 50 && valor <=100){
            desc = 5
        }
        else if(valor > 100 && valor <=200){
            desc = 10
        }
        else if(valor > 200){
            desc = 15
        }
        else{
            dados.innerHTML = "Não há desconto a ser aplicado! <br><br>"
        }
        let val_final = valor * (1 - desc/100)
        dados.innerHTML += "Valor original da compra = R$" + valor + "<br> Porcentagem de desconto aplicada = " + desc + "%<br>Valor Final = R$" + val_final;
    }
    else{
        dados.innerHTML = "Digite um número válido";
    }
}