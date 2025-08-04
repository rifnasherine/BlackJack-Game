
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let hasStarted = false
let message ="";

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.querySelector("#sum-el")

//to draw random cards
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber==1){
       return 11
    }
    else if(randomNumber>10){
         return 10
    }
    return randomNumber
}

//to start the game
function startGame(){
    hasStarted = true
    isAlive = true
    hasBlackJack = false
    cards=[]
    sum = 0
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum+=cards[0]+cards[1]
    renderGame()
}

//to render the game based on changes
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw another card?"
    }
    else if(sum === 21){
        message = "You have got a blackJack!"
        hasBlackJack = true;
    }
    else{
        message ="You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message;  
}

//when drawing new card
function newCard(){
    if(isAlive && !hasBlackJack){
    let newCard = getRandomCard()
    sum+=newCard
    cards.push(newCard)
    renderGame()
    }
    else if(hasBlackJack){
        messageEl.textContent = "You have already won!"
    }
    else if(!isAlive && hasStarted){
        messageEl.textContent = "You cannot draw cards anymore"
    }
    else {
        messageEl.textContent = "Start the game to draw a new card"
    }
    
    
}


