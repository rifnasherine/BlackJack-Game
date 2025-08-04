# Blackjack Game

A simple implementation of the classic Blackjack game using HTML, CSS, and JavaScript.

## 💡 Features

- 🎴 **Random Card Generation:** Cards are drawn randomly from values 1 to 13, with face cards treated as 10 and Ace as 11.
- 📊 **Running Sum Tracking:** The total value of the cards drawn is continuously updated and displayed.
- 💬 **Dynamic Game Messages:** The game displays different messages based on the player's card sum:
  - `"Do you want to draw another card?"` – when the sum is 20 or less
  - 
  - `"You have got a Blackjack!"` – when the sum equals 21
  - `"You are out of the game"` – when the sum exceeds 21
  - `"You have already won!"` – when a card is drawn after getting Blackjack
  - `"You cannot draw cards anymore"` – when trying to draw after losing
  - `"Start the game to draw a new card"` – when trying to draw before starting the game
- ✅ **Game State Handling:**
  - Tracks whether the player is still alive
  - Detects when the game has started or ended
  - Prevents invalid actions like drawing cards after winning or losing
- 🧑‍💼 **Player Object:** Displays the player name and coin balance.
- 🖱️ **Interactive Buttons:** Start the game and draw new cards through button clicks.


## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## 📸 Screenshot



