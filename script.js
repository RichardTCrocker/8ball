var eightBallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it."
]

function getAnswer(element){
    var roll = Math.random();
    roll = Math.floor(roll*(eightBallAnswers.length));
    console.log(roll)
    element.innerText = eightBallAnswers[roll];
    return roll;
}