let range = 2, level = 1;

function numberRange() {
  const userName = prompt("Enter Username");
  let generatedNumber, guessNumber;
  for (let i = 0; i < 3; i++) {
    generatedNumber = Math.floor((Math.random() * range) + 1)
    console.log(generatedNumber)
    guessNumber = +prompt("Guess Number");

    if (guessNumber === generatedNumber) {
      if (level === 3) {
        console.log(`Congrats, you passed all the levels!!`)
      } else {
        console.log(`Hurray ${userName} the generated number is ${generatedNumber}, you're moving on to level ${++level}`)
        range++;
      }
    } else {
      console.log(`Sorry ${userName} the generated number is ${generatedNumber}, and you lost`);
      break;
    }
  }
}



console.log(numberRange())








