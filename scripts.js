const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const inputCurrencyValuetoConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const inputCurrencyValueConverted = document.querySelector(".currency-value-converted") // Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.0
    const euroToday = 5.43

    if (currencySelect.value == "dolar") {
        inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        inputCurrencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    inputCurrencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

    console.log(inputconvertedValue)
}

currencySelect.addEventListener("change", changeCurrency)

function changeCurrency() {
    const currencyName = document.getElementById(".currency-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML == "dolar americano"
    }

   if (currencySelect.value == "euro"){
    currencyName.innerHTML == "Euro"
   }
}

convertButton.addEventListener("click", convertValues)

currencySelect.addEventListener("change", changeCurrency)