const again = document.querySelector(".again");

const ComputerNumber = document.querySelector(".number");

const input = document.querySelector(".guess");

const check = document.querySelector(".check");

const message = document.querySelector(".message");

const score = document.querySelector(".score");

const highscore = document.querySelector(".highscore");
let Score = 0
let HighScore = 0
let distance = 15;
let value = 0;
let randomNumber = generateRandomNumber();
input.addEventListener("input", () => {
  value = parseInt(input.value);
});

again.addEventListener('click',() =>{
    randomNumber = generateRandomNumber();
    message.textContent = "Start Guessing..."
    input.value= ''
    ComputerNumber.textContent = "?"
    score.textContent = "0"
    document.querySelector('body').style.backgroundColor = '#222'
})

check.addEventListener("click", () => {
  if (value == randomNumber) {
    document.querySelector('body').style.backgroundColor = 'green'
    ComputerNumber.textContent = randomNumber
    message.textContent = "🎉  Correct number!"
    score.textContent = Score
    if (Score>HighScore) HighScore = Score
    Score=0
    highscore.textContent = HighScore
  }else if( Math.abs(randomNumber-value) > distance ){
    Score++;
    score.textContent =Score
    message.textContent = "📈  Too high!"
  }else if(Math.abs(randomNumber-value) < distance ){
    Score++
    score.textContent =Score
    distance =  Math.abs(randomNumber - value)
    message.textContent = "📉 Too low!"
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 99 + 1);
}
