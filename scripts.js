const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const inputCurrencyValuetoConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const inputCurrencyValueConverted = document.querySelector(".currency-value-converted") // Outras moedas
    

    console.log(currencySelect.value)
    const dolarToday = 4.95
    const eurotoday = 5.37

    const inputconvertedValue = inputCurrencyValue / dolarToday
    
    inputCurrencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    
    }).format(inputCurrencyValue)

    
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD"
    }).format(inputconvertedValue)


    console.log(inputconvertedValue)



}


convertButton.addEventListener("click", convertValues)