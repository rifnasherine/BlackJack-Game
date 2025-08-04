# 🃏 Blackjack Game

A simple implementation of the classic Blackjack game using HTML, CSS, and JavaScript.

🔗 **[Play the Live Demo Here](https://games-black-jack.netlify.app/)**

## 💡 Features

- 🎴 **Random Card Generation:** Cards are drawn randomly from values 1 to 13, with face cards treated as 10 and Ace as 11.
- 📊 **Running Sum Tracking:** The total value of the cards drawn is continuously updated and displayed.
- 💬 **Dynamic Game Messages:** The game displays different messages based on the player's card sum:

  - `"Want to play a game?"` – before the game starts
    
    <img width="1919" height="972" alt="Error: Start game screen not available" src="https://github.com/user-attachments/assets/cf865844-0ad2-48e8-b1a4-666ce69d8f4d" />

  - `"Do you want to draw another card?"` – when the sum is 20 or less
    
    <img width="1919" height="975" alt="Error: Draw another card screen not available" src="https://github.com/user-attachments/assets/b8cf3a33-8c0c-44e0-b1a9-874d380a15c3" />

  - `"You have got a Blackjack!"` – when the sum equals 21
    
    <img width="1913" height="967" alt="Error: Blackjack message screen not available" src="https://github.com/user-attachments/assets/ec1ca27f-5c06-4f12-8947-784949ce9435" />

  - `"You are out of the game"` – when the sum exceeds 21
    
    <img width="1919" height="969" alt="Error: Out of the game screen not available" src="https://github.com/user-attachments/assets/2cbcb81e-d586-4125-ab1a-855c42910a1c" />

  - `"You have already won!"` – when a card is drawn after getting Blackjack
    
    <img width="1914" height="961" alt="Error: Already won message screen not available" src="https://github.com/user-attachments/assets/3bac1db8-3b59-4421-a776-3391ca307848" />

  - `"You cannot draw cards anymore"` – when trying to draw after losing
    
    <img width="1911" height="971" alt="Error: Draw after losing screen not available" src="https://github.com/user-attachments/assets/2d2678cd-04a6-4d25-98a3-94c5d938e187" />

  - `"Start the game to draw a new card"` – when trying to draw before starting the game
    
    <img width="1916" height="978" alt="Error: Draw before starting screen not available" src="https://github.com/user-attachments/assets/fa5c0820-b66f-4470-83cb-665b8fdba444" />

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
