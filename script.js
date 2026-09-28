fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{
    return resposta.json()
} ).then(economia => {
    console.log(economia.USDBRL.bid)
    document.getElementById("valorDolar").innerHTML= "o valor atual é R$"+ economia.USDBRL.bid
    document.getElementById("maiorValor").innerHTML= "o maior valor é R$"+ economia.USDBRL.high
    document.getElementById("menorValor").innerHTML= "o menor valor é R$"+ economia.USDBRL.low
})