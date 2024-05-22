
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency")


function convertValues() {

    const inputvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //  outras moedas


    console.log(currencySelect.value)


    const dolartoday = 5.11
    const euroToday = 5.56
   



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputvalue / dolartoday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputvalue / euroToday)
    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputvalue)
}

console.log("convertValues")


function changeCurrency() {

    console.log("curret")

    const dolarAmericano = document.getElementById("dolarAmericano")
    const currencyimg = document.querySelector(".estados-unidos")


    if (currencySelect.value == "dolar") {
        dolarAmericano.innerHTML = "Dólar americano"
currencyimg.src = "./assets/logo-EUA.png"
    }

    if (currencySelect.value == "euro") {
        dolarAmericano.innerHTML = "euro"
        currencyimg.src = "./assets/logo-EURO.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)