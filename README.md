# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Amantina**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/orchid-eminent-particle

## Required Functionality

The following **required** functionality is complete:

- ✅ Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- ✅ "Start" button toggles between "Start" and "Stop" when clicked.
- ✅ Game buttons each light up and play a sound when clicked.
- ✅ Computer plays back sequence of clues including sound and visual cue for each button
- ✅ Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- ✅ User wins the game after guessing a complete pattern
- ✅ User loses the game after an incorrect guess

The following **optional** features are implemented:

- ✅ Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- ✅ Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- ✅ Playback speeds up on each turn
- ✅ Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- ✅ Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✅] Button image simulates shape of Simon Says Game, as well as lights up when pressed (using custom vectors)
- [✅] Shape of button area is static to ensure the buttons are oriented in 2x2 grid to maintain classic Simon Says Circle shape

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/4dde33fe-7b11-4279-9e6b-e18f3741b8ad/ezgif.com-gif-maker.gif?v=1647390210877)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I used https://htmlcheatsheet.com/css/ to aid in creating the drop shadow for the header text, 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? 

   Simon Says, the simple yet classic memory game, seemed like it would be straightforward to code up. I was excited to follow along with the tutorial to produce this childhood favorite. Although the process was smooth sailing for the most part, I found myself having to do the most troubleshooting when it came time to implement the guess function. I’ve used If/Else conditional statements in the past, but what was challenging was ensuring I was correctly translating the flow chart to the nested conditionals. For example, I had to figure out exactly how “Is the guess correct” would be represented with the variables I had access to. Once I figured that out, I made an error in my if statement for if the turn was over. Instead of checking if the guessCounter equaled the progress, I thought guessCounter needed to equal progress + 1. This resulted in a big red error message in my terminal that caught me off guard. I realized the best way to see what was going on was to use console.log and print out information to see the values of my variables and see where in the code the problem was happening. This solution helped me see the error and I was able to move on. Following that same strategy, I figured out which variables needed to be checked and which functions needed to be called. I realized that going from a logical flow to code is very practical and used in website development all the time, so I felt very grateful to have practiced this skill, and I believe my understanding of conditionals and troubleshooting with console.log is stronger now that I’ve overcome this problem. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   This tutorial gave me a very comprehensive overview of how to use HTML, CSS, and Javascript, though I’m curious about the next steps. One question I have is how can I decompose my code to be able to use elements on other screens of the page? For example, let's say I wanted to reuse the gameButtonArea div element on another screen of my webpage (if the webpage were multiscreen). How can I write the code for the component in another file then import it somehow for future/repeated use? I also was thinking about this question when the script.js file started getting really long with lots of functions when not all the functions were necessarily relating to the same thing. Is there a better way to organize functions in the script.js file to be clearer, or even decomposed into separate files? Finally, I am really curious about how to animate features on the webpage. For example, some of my favorite websites have elements that float in or move as you scroll down the page. I’d love to learn how to create a dynamic website like that, so I wonder what language controls the animations (HTML, JS, CSS)?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I had so much fun creating this simple webpage that I lost track of time and spent several hours more than I budgeted. However, given a few more hours of work time, I would have loved to complete all the optional features. For example, I think the ticking clock feature would have been really fun to play around with, especially to not only implement the functionality in javascript but also add the component in HTML and style it in CSS. I would have liked to play around with how the time changes, with some sort of animation, and even change the color to yellow then red when there's a certain amount of time left. I also really enjoyed changing the pitches of the sounds the buttons made, so expanding on that further to include chords or nicer sounding audio would be another feature I would implement if I had the time. 


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright Amantina Rossi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
