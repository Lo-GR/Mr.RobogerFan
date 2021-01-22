Rules
Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"

Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"

Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

Describe: beepBoop()
// Test: "It should return an array with a 0 if the number 0 is inputted"
// Expect(beepBoop(0).toEqual([0]);
// Test: "It should return an array of numbers from 0 to the inputted number"
// Expect(beepBoop(5).toEqual([0, 1, 2, 3, 4, 5]);
Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits with 'Beep!'"
Expect(beepBoop(5).toEqual(["Beep!", 2, 3, 4, 5]);
Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits of that number with 'Beep!' and every number containing '2' replaces all digits of that number with 'Boop!'"
Expect(beepBoop(5).toEqual(["Beep!", "Boop!", 3, 4, 5]);
Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits of that number with 'Beep!', every number containing '2' replaces all digits of that number with 'Boop!', and every number containing 3 replaces all digits of that number with 'Won't you be my neighbor?'"
Expect(beepBoop(5).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]);

function beepBoop(userNumber) {
  const numberChosen = parseInt(userNumber);
  let numberArray = []
  numberArray.push(numberChosen);
  for (let index = 0; index < numberChosen; index ++){
    numberArray.unshift(numberArray[0]-1);
  }
  return numberArray;
};