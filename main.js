
let sum= 0
let newcards=[]
let hasblackjack=false
let isAlive= false
let message = ""
let player= {
 name: "Mersan",
 chips: 145
}



let messageEl=document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl =document.getElementById("player-el")



playerEl.textContent =player.name +": $" +player.chips


function start(){
  isAlive=true
  let firstCard =getRandomCard()
  let secondCard = getRandomCard()
  newcards =[firstCard,secondCard]
  sum= firstCard + secondCard
  

  rendergame()
}
function getRandomCard(){
   let random= Math.floor(Math.random()*13) +1
  if(random === 1){
    return 11
  }else if(random > 10){
    return 10
  }else{
    return random
  }
   
}

function rendergame(){
  cardEl.textContent="Card :"
  for (let  i = 0; i < newcards.length; i++) {
    cardEl.textContent += newcards[i] + " "
  }
  
  sumEl.textContent ="Sum :" + sum
if (sum <= 20) {
  message = "Did you want to draw a new card?"
} else if (sum === 21) {
  message = " you've got the blackjack!"
  hasblackjack=true
} else{
  message= "You're out of the game!😭 start again"
  isAlive=false
}
messageEl.textContent= message
}



function newcard(){
  if(isAlive===true && hasblackjack===false){
  let card = getRandomCard()
  sum += card
newcards.push(card)
 rendergame()
 }
}
