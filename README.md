## 04 Web APIs: Code Quiz

This assignment is a timed coding quiz with multiple-choice questions. The user has to answer the questionnaire within the given time. Once the timer is done, it will end the quiz, and the results will be shown. The main feature of this application is the dynamically updated webpage using javascript. This is also responsive so that it adapts to multiple screen sizes.

## Application

* The user clicks the "Start Quiz" button on the homepage.
* On starting the quiz, the timer begins and also they can see the question.
* If the question is answered, they can see more questions one by one.
* If a question is answered incorrectly, time is subtracted from the clock.
* If all the questions are answered or if the timer ends, the user can see the score and save their score by providing initials.

## Implementation

* It has three files: index.html, style.css, script.js.
* As this is a dynamically updated webpage, most of the HTML, CSS are being present in script.js.
* There are seven event handlers present to handle the actions including start quiz, start timer, answer selection, submit, go back, clear highscores, view highscores.
* Start Quiz - The button "start quiz" starts the quiz and also starts the timer.
* Answer Selection - The user selects the answers for the questions. The quiz will be evaluated based on the answers entered. Once the user answered all the questions or if the timer ends, the results page will be shown.
* Submit - The user can see their score, need to enter the initials to save their score.
On clicking "Submit" shows the recent highscores so that the user can compare their score with their peers.
* goBack - On Clicking "go back" reaches the homePage, and the user can start another quiz.
* Clear Highscore - On Clicking "Clear Highscores" clears the scores, not only from the page but also from the localStorage. 
Note: On clicking this button, no scores will be there to see. The user has to retake the test to see the score.
* View Highscore  - It lists all the recent scores with the recent scores first.

#### Screenshots

<p style ="text-align:center;">
<img src="Assets/CodeQuizHomePage.jpg" width="300" alt= "HomePage" height="350"/>
<img src="Assets/CodeQuizQuesAns.jpg"  width="300" alt="Ques and Ans page" height="350"/>
<img src="Assets/CodeQuizResultsPage.jpg" width="300" alt="Show Results Page" height="350"/>
<img src="Assets/CodeQuizDisplayHighscores.jpg"  width="300" alt="Display Highscores Page" height="350"/>
<img src="Assets/CodeQuizAlertDisplay.jpg"  width="300" alt="Alert Display Page" height="350"/>
</p>

Here's the link to my developed Website : [Web API-CodeQuiz](https://yakinia.github.io/04-WebAPIs-CodeQuiz)

##### References

StackOverflow-Timer : [Timer](https://stackoverflow.com/questions/58964755/subtract-time-from-timer-if-answer-is-wrong-creating-a-quiz-javascript)<br/>
StackOverflow-DynamicElements: [DynamicElements](https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)<br/>
Blog-LocalStorage : [LocalStorage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)<br/>
LocalStorage-Javascript: [LocalStorage](https://medium.com/better-programming/how-to-use-local-storage-with-javascript-9598834c8b72)
