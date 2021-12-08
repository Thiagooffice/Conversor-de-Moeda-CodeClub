const button =document.getElementById("converte-botao")
const select = document.getElementById("select")

const euro = 6.28
const dolar = 5.55


const converteValor = ()=>{
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const dollarValueText = document.getElementById("dollar-value-text")

    if(select.value === "US$ Dólar americano"){
        const valorDolar = inputReal / dolar
        dollarValueText.innerHTML = valorDolar.toFixed(2)
        realValueText.innerHTML = inputReal
    }
    if(select.value === "€ Euro"){
        const valorEuro = inputReal / euro
        dollarValueText = valorEuro
    }

}

changeCurrency = ()=>{
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }
    if(select.value === "US$ Dólar americano"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dollar.svg"
    }
}

button.addEventListener("click", converteValor)
select.addEventListener("change",changeCurrency)