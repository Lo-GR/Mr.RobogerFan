function beepBoop(userNumber) {
  const numberChosen = parseInt(userNumber);
  let numberArray = []
  numberArray.push(numberChosen);
  for (let index = 0; index < numberChosen; index ++){
    numberArray.unshift(numberArray[0]-1);
  }
  return numberArray;
};
console.log(beepBoop("5"))