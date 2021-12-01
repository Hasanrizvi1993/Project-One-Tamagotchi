![Screen Shot 2021-11-30 at 10 13 25 PM](https://user-images.githubusercontent.com/88109038/144182026-42a71834-1312-4e3e-8450-848b7b4f6ac3.png)
![Screen Shot 2021-11-30 at 10 13 32 PM](https://user-images.githubusercontent.com/88109038/144182043-6c0d326f-dafd-4b99-b56c-f4976e5de404.png)
![Screen Shot 2021-11-30 at 10 14 20 PM](https://user-images.githubusercontent.com/88109038/144182067-ffd0fae1-ddf5-4894-a4f6-f56dbc0efe0a.png)
![Screen Shot 2021-11-30 at 10 13 51 PM](https://user-images.githubusercontent.com/88109038/144182056-e3e5bfdb-4630-4a4b-8c85-10b1f7e16c6b.png)

# Project-One-Tamagotchi
Tamagotchi game

# Concept

- This is going to be Tamagotchi game that will allow users to make a pet, name the pet, and give the pet an age. The user will feed the pet, play with the pet, and keep the pet awake in order to avoid it from dying. The pet dies if any one those three metrics reaches 10. The user wins the game, if the game progress meter reaches 100% without the pet dying.

# User Story:

1. As a user I can click on mt Tamagotchi to select it
2. As a user, I can name my Tamagotchi
3. As a user, I can give my Tamagotchi an age
4. the Tamagotchi pet will have four integer metrics
   - Hunger
   - Sleepiness
   - Boredom
   - Age
5. The metrics will count up from 1 to 10 every two seconds
6. When one of the three metrics (hunger, sleepiness, boredom) reaches ten, the pet dies
8. The user will have three buttons Feed your pet, Play with your pet, keep the light on.
   -  the Feed your pet button will decrease the hunger metric one point
   -  the Play with your pet button will decrease the boredom metric by one point
   -  the keep light on button will decrease sleepiness. When the light on button is being clicked on, the sleepiness will go down, if the button is not clicked,         the sleepiness meter will go up.
9. The pet will have physical changes at certain age (100) as the pet ages. It will have two different physical changes. the first one will be a young character, the second one will be an older version of it at age 100. 
10. There will be a completed work percentage bar (time), that bar will be like a timer which will keep increasing, the pet has to stay alive until the meter reaches 100%, in order to win the game. Once the game finishes successfully, a message will appear "congratulations! You Won!
11. if the character dies, the following message will appear "you lost! try again or quit game!"
12. if the "try again button is clicked, the game will restart
13. if the "quit game" button is clicked, the game will end
14. if time permits, I might add additonal features to it





<!-- sudo code

adding functionality to the buttons (feed, light, play) using functions, set interval.

make the hunger, sleepiness, boredom bar go from 1-10 automatically using a for loop or function

make button functionality that brings down the bar progress while its going up

make the game progress main bar go up from 1 - 100% (deathbar)

make the age bar go from 1 - 100

change the apperance of the dragon when you hit the age is at 100%

make functionality of the game ending if it reaches 10 in anyone of the metrics

if the time reaches 100 without anyone of the metrics reaching 10, then the page changes to the win alert

if and of the bars reach 10 the user loses, the lose alert pops up.

they both have the same modal pop up that needs to have thier own clicklable options to either restart the game or exit. -->




