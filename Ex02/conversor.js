const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})

readline.question("Escolha para qual tipo de temperatura quer converter:\n 1.Celsius\n 2.Fahrenheit:\n", (tipoDaTemperatura)=>{
    
    if (!isNaN(tipoDaTemperatura)){
        if (tipoDaTemperatura == 1){
            readline.question("A conversão escolhida foi de Fahrenheit para Celsius\n Digite o valor da temperatura a ser convertida:\n", (temp)=> {
                if (!isNaN(temp))
                    final = (temp - 32) * 5 / 9
                    console.log("A temperatura original em Fahrenheit era " + temp +"F°\nEm Celsius fica " + final + "C°")
                    readline.close()})}
        
        else if (tipoDaTemperatura == 2){
            readline.question("A conversão escolhida foi de Celsius para Fahrenheit\n Digite o valor da temperatura a ser convertida\n", (temp)=> {
                if (!isNaN(temp))
                    final = (temp * 9 / 5) - 32
                    console.log("A temperatura original em Celsius era " + temp +"C°\nEm Fahrenheit fica " + final + "F°")
                    readline.close()})
    }
    else{
        console.log("Tipo incoreto, encerrando")
        readline.close()
    }
}})
