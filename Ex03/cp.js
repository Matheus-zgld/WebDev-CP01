const readLine = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
readLine.question("Digite um número:\n", (numeroDigitado)=>{

    let num = parseInt(numeroDigitado)

    if(!isNaN(num)){
        if(num < 0){
            console.log("O numero digitado é negativo")
        }
        if(num > 0){
            console.log("O numero digitado é positivo")
        }
        if(num == 0){
            console.log("O número é 0")
        }
    }
    else{
        console.log("Você digitou um caractere errado")
    }
    readLine.close()
})
