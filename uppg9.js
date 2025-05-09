

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort (numbersArray) {
        let result = []

        for (number of numbersArray){
        
            if (number % 2 === 0){
                console.log(number, "jämt")
                result.push([number, "jämt"])
            } else {
                console.log(number, "udda")
                result.push([number, "udda"])
            }
        }
        return result

    }
    testArray = [1, 5, 8, 20, 45, 2, 44, 7]
    return sort(testArray)
    
}
uppg9()
module.exports = { uppg9 };