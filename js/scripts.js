// function beepBoop(userNumber) {
//   const numberChosen = parseInt(userNumber);
//   let numberArray = []
//   numberArray.push(numberChosen);
//   for (let index = 0; index < numberChosen; index ++){
//     numberArray.unshift(numberArray[0]-1);
//   }
//   return numberArray;
// };

function beepBoop(userNumber) {
  const numberChosen = parseInt(userNumber);
  let numberArray = []
  let transformedArray = []
  numberArray.push(numberChosen);
  for (let i1 = 0; i1< numberChosen; i1 ++){
    numberArray.unshift(numberArray[0]-1);
  }
  for (const element of numberArray){
    let numberString = element.toString();
    let varToPush;
    for (let i2 = 0; i2 < numberString.length; i2 +=1){
      if (numberString.charAt(i2) === "1") {
        varToPush = "Beep!"
        // transformedArray.push("Beep!");
        i2 = numberString.length;
      } else {
        varToPush = numberString;
      };
    }
    transformedArray.push(varToPush);
  };
  return transformedArray;
};

console.log(beepBoop("50"))