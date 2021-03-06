function beepBoop(userNumber) {
  const numberChosen = parseInt(userNumber);
  let numberArray = []
  let transformedArray = []
  numberArray.push(numberChosen);
  for (let i = 0; i< numberChosen; i ++){
    numberArray.unshift(numberArray[0]-1);
  }
  for (const element of numberArray){
    let numberString = element.toString();
    if (numberString.includes("3")) {
      numberString = "Won't you be my neighbor?"
    } else if (numberString.includes("2")) {
      numberString= "Boop!"
    } else if (numberString.includes("1")){
      numberString = "Beep!"
    };
    transformedArray.push(numberString);
  };
  return transformedArray;
};

$(document).ready(function() {
  $(".numberForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#numberGenerator").val();
    if (userInput === "0"){
      $("#showNumbers").text("Hey, pal! That's a zero!");
    } else if (userInput.includes("-")) {
      $("#showNumbers").text("Sorry, buddy! I can't do negatives yet!");
    } else {
      $("#showNumbers").text(beepBoop(userInput).join(', '));
    }
  });
});