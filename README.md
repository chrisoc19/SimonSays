    
   
### Simon Game.
The Simon game is a exciting memory game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's a enterainting and edecational game, with lights and sounds that can challenge you and is designed for children under 10 years old, the desgin gives an overall feel of a child friendly environment. Features include a Power button to turn on and off everything, a Start button to start the game sequence when user is ready and a Strict mode button which if selected will restart the game if the user gets a guess wrong.The user must complete 20 rounds to win the game. 


A live version can be found on [Github Pages](https://chrisoc19.github.io/SimonSays/)
 
### UX
## Project Goals
The primary goal of Simon Game is to provide a fun, intuitive and child friendly game to entertain it's users. Simon Game has two target audiences, children and their parents.

User Goals:

-  A fun game to play.
- kid friendly controls.
- Game controls laid out together and in an intuitive way.
- Fun images and sounds.
- Visual and audio rewards while playing.
- A game with child development value. In this case to improve their memory.
- A visually appealing, well-functioning game.

Simon Game is a great way to help players meet these needs because:

- Controls are grouped together clearly.
- Includes audio and visual stimulus as part of the game.
- Simon Game gives a child a fun environment in which to practice their memory skills.
- It has been designed with user experience as a priority, not only for a child using it but also for a parent.

## User story
- I am presented with a random series of button presses.
- Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
- I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
- If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
- I can see how many steps are in the current series of button presses.
- If I want to restart, I can hit the Start button, and the game will return to a single step.
-  I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
-  I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

## Design choices
The overall feel of the game is for children to enjoy. The following design choices were made with this in mind:

# Fonts
The font I chose was 'Original Surfer' because it sticks nicely with my sea theme. Its also very clear and easy to read.

# Colors
The colors I chose where inspired by the orignal Simon Game. They also fit in nicely with the background.

# Background
The background was chosen was a sea theme. I chose this theme as I think it will be apealing to my target audience children.

# Audio files
- To continue the feeling of a game made for children,The button sounds are similar to the sounds that a child might expect to hear when at the beach or at sea.
- The sounds of the Power button and Strict button where added to add to the feel of the game.
- The win sound was added to give positive feedback on use of the game.

## Wireframes
I used [Balsamiq](https://balsamiq.com/) for the design and planning process for this project.
- [Balsamiq](https://balsamiq.com/)
- [Balsamiq](https://balsamiq.com/)
[Balsamiq](https://balsamiq.com/)



This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features
 
### Existing Features
- On arriving at the page, the user can read a quick game description on the top of the page.

1. The power button 
- The power button is the button that turns on the game.
- If the power button is not checked the start button and strict button are disabled.
- A noise is played button when checked/unchecked.
 - All tiles flash when checked/unchecked.
 - When unchecked restarts the javaScript.
 
                   
2. The Start button 
-  All tiles are unclickable until start button is clicked.
-  Starts the game sequence of color "flashes".
- If clicked on during game play will reset the game.
                   
3. The Strict button  
-  When the strict button is checked/unchecked the game will reset.
- When the strict button is checked/unchecked the game will flash all tiles.
- When the strict button is checked/unchecked the game will play a noise.

4. The Counter
- The counter displays the color count which the player is currently on.
- When a user powers off the game by using the Power button the counter reads "bye".
- When the player wins a game the counter reads "win!".

5. The colored Circle
- The colored circle is how the user actually plays the game.
- The colored circle is a circle divided into four colored sections of Green, Red, Yellow and Blue.
- When User powers on the game and clicks start, using javascript one of the four sections will change into a lighter color this is done to represent a color flash.
- When a color is "flashing" a noise will also be played.This is to help the user remember the sequence.
- When a user clicks on a color it will flash and play a sound.  

### Features Left to Implement
- High score
In the future I'd like to add a high score mode that saves a score locally and is a infinite secquence that continues until user guess wrong. 

## Technologies Used
- This project uses HTML, CSS and JavaScript programming languages.

[AWS Cloud9](https://aws.amazon.com/cloud9/)
- Developer used AWSCloud9 for their IDE while building the website.
[Bootstrap](https://getbootstrap.com/)
- The project uses Bootstrap to help with structure and make the website responsive easily.
[Google Fonts](https://fonts.google.com/)
- The project uses Google fonts to style the website fonts.
[GitHub](https://github.com/)
 - This project uses GitHub to store and share all project code remotely.

## Testing
This site was tested in google dev tools, responsiveness was tested to ensure that everything works well. Also all features of the page are scaling as intended in tablet and mobile devices.

-I  tested mobile responsiveness [Varvy.com](https://varvy.com/mobile/).
-I  tested Html [Varvy.com](https://varvy.com/mobile/).
-I  tested the CSS [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/).
-I  tested the Javascript [jshint.com](https://jshint.com/).

#Tests
1. Power Button:
   While Power button is unchecked:
    - The colored circle is not clickable. 
    - Start button is disabled.
    - Strict button is disabled.
    - Counter box is empty.
    
  While Power button is checked:
    - A sound is played.
    - All colors "Flash".
    - The colored circle is not clickable.
    - Start button is now clickable.
    - Strict button is now clickable.
    - Counter box reads "-".
    
2. Start Button:
   While Start button is unchecked:
    - The colored circle is not clickable.
    - Counter box reads "-".
    
   While Start button is checked:
    - The game is started.
    - A color is flashed and a sound is played.
    - Counter box reads "1".
    
   If Start button pressed during game play:
    - The game is reset.
    
   -If Strict button unchecked or checked during gameplay the circle is not clickable until start is clicked.

3. Strict Button:
   While Strict button is unchecked:
    - The User has an unlimited amount of attempts.
    - If unchecked/checked durning game play all colors flash and a noise is heard.
    - If unchecked/checked durning game play Counter box reads "-".
    - If unchecked/checked durning game play the game is reset.
    
   While Strict button is checked:
    - A sound is played.
    - The User has one attempt.
    
     If user guesses wrong the color:
       - Counter box reads "No!" and is reset to "1".
       - The game is reset.
       
    If unchecked or checked during gameplay:
     - An sound is played.
     - All colors flash.
     - Game is reset.
     - Counter box reads "-".
     
 4. Colored Circle:
    - Is not clickable until the power is checked and the start button is pressed.
    - Changes to the correct color and plays correct sound during game play.
    - All colors flash when power on/off and when strict mode is selected on/off.
    
   
  # Issues/Bugs
  1. When Power is checked and before start is checked player could click on the colored circle and counter box read undifined. I fixed this by using document.location.reload(true) and this reset everything so the circle is activated only by clicking start.
  2. The strict button was able to turn on or off during gameplay. I fixed this by using clearInterval(intervalId); which reset the gameplay whenever the strict button was turned on/ off.
    
   

## Deployment
This project was developed using the AWSCloud9 IDE, committed to git and pushed to GitHub.

To deploy the following steps were taken. From this [Github](https://github.com/chrisoc19/SimonSays), I went into the menu items near the top of the page, then selected Settings. I then scrolled down to the GitHub Pages section and Under Source click the drop-down menu labelled None and select Master Branch. After the page refreshed I scrolled back down to the GitHub Pages section to retrieve the link to the deployed website.

# To run locally
To run locally, you can clone this repository directly into the editor by pasting git clone https://github.com/chrisoc19/SimonSays.git into your terminal.

## Credits
### Content
- The text in this project was written by the developer.

### Media
# Image
- The image used for the background were obtained from Google Images and are used for educational purposes only. 
# Audio
- The audio files were sourced from [freesound](https://freesound.org/home/).

### Acknowledgements

- [StackOverFlow](https://stackoverflow.com/)
- [Code Institute](https://courses.codeinstitute.net/).
- [Slack](https://slack.com/intl/en-se/).
-[W3schools](https://www.w3schools.com/)

