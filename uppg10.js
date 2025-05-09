function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

      function sort(numbers) {
        let result = {
            bigEven: [],
            smallOdd: [],
            other: []
        }

        for (number of numbers){
          if(number > 10 && number % 2 === 0){
            result.bigEven.push(number)
          } else if(number < 10 && number % 2 !== 0){
            result.smallOdd.push(number)
          } else {
            result.other.push(number)
          }
        }

      return result

  }

 return sort(numbers)

  }
  uppg10()
  module.exports = { uppg10 };
  