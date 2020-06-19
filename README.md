## 04 Web APIs: Code Quiz

This assignment is a timed coding quiz with multiple choice questions. The user has to answer the quiz within the given time. Once timer is done it will end the quiz and resuls will be shown. The main feature of this application is the dynamically updated webpage using javascript. This is also responsive so that it adapts to multiple screen sizes.

## Application

* The user clicks the "Start Quiz" button on homepage.
* On starting the quiz, the timer starts and also they can see the question.
* If the question is answered they can see the questions one by one.
* If a question is answered incorrectly, time is subtracted from the clock.
* If all the questions are answered or if the timer ends, the user can see the score and save their score by providing their initials.

## Implementation

* It has three files: index.html, style.css, script.js.
* As this is a dynamically updated webpage most of the HTML, CSS are being present in script.js.
* There are seven event handlers present to handle the actions including start quiz, start timer, answer selection, submit, goback, clear highscores, view highscores.
* Start Quiz - The button "start quiz" starts the quiz and also starts the timer.
* Answer Selection - The user selects the answers for the questions. The quiz will be evaluated based on the answers entered. Once the user answered all the questions or if the timer ends, the results page will be shown.
* Submit - The user can see their score, need to enter the initials to save their score.
On clicking "Submit" shows the recent highscores so that the user can compare their score with their peers.
* goBack - On Clicking "goBack" reaches the homePage and the user can start another quiz.
* Clear Highscore - On Clicking "Clear Highscores" clears the scores, not only from the page but also from the localStorage. 
Note: On clicking this button, no scores will be there to see. The user have to take the test again to see the score.
* View Highscore  - It lists all the recent scores with the recent scores first.
