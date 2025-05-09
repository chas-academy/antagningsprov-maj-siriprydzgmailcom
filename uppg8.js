

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    let myFriends = [
    {name: "Erik", age: 11}, 
    {name: "Claes", age: 55},
    {name: "Jasmine", age: 24},
    {name: "Cloe", age: 67},
    {name: "Putte", age: 33}   
    ]

    function ageCheck(persons){
        for(let person of persons){
            if(person.age > 30){
                console.log(person.name)
            }
        }
    
    }

    ageCheck(myFriends)
}
uppg8()
module.exports = { uppg8 };