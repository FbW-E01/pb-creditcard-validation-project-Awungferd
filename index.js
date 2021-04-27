function validateCreditCard(creditCardNum) {
  creditCardNumToArray = Array.from(creditCardNum); //convert user input to array of strings
  numberedArray = creditCardNumToArray.map((i) => Number(i));

  //-___________________________________
  let addUpInput = 0;
  for (let addBase = 0; addBase < numberedArray.length; addBase++) {
    addUpInput += numberedArray[addBase];
  }

  //________________________________________
  lengthOfInput = creditCardNum.length; // to check if input is 16 digits
  getLastDigit = creditCardNum.slice(-1); //to extract final digit
  ifLastIsEven = getLastDigit % 2 === 0; // to check if final digit is ven
  if (
    creditCardNumToArray.length === 16 &&
    isNaN(creditCardNum) === false &&
    ifLastIsEven === true &&
    addUpInput > creditCardNum.length
  ) {
    return "Your Credit Card is Valid. Enjoy your shopping!";
  } //else if (isNaN(creditCardNum) === false) {
  //return "You are on track!";
  // }
  {
    return "ALERT: sorry, try again. Input must be 16 digits, numbers only!";
  }
}

/**** tests *****/
console.log(validateCreditCard("9999777788880000")); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard("6666666666661666")); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard("a92332119c011112")); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard("4444444444444444")); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard("1211111111111112")); //{ valid: true, number: '1211-1111-1111-1112' }
