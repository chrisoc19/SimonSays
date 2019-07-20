    
   
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

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

