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

currencySelect.addEventListener("currency-name")
console.log("trocou de moeda")

    function changeCurrency () {
        const currencyName = document.getElementById("currency-Name")

    }

convertButton.addEventListener("click", convertValues)
