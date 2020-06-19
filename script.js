var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");
var container = document.querySelector(".container");
var quizImage =document.querySelector(".quizImage");
var resultDisplay = document.getElementById("resultDisplay");
var timer = document.querySelector("#timer");
var highscoreTitle = document.getElementById("highscoreTitle");
var highscoreDisplay = document.getElementById("highscoreDisplay");
var highscoreValue = document.getElementById("highscoreValue");
var viewHighscore = document.getElementById("highscore");
var colHeader = document.querySelector(".col-header");
var highscoreInitials ="";

var i=0; var k=0;
var score=0;
var userId = "";
var liCount = 1;  
var interval;
var totalSeconds = 80;
var ptag;
var input;


var arrQues = [
    {q: "How do you create a function in JavaScript?",  
    options : ["function:myFunction()", 
     "function = myFunction()",
     "function myFunction()",
     "All are correct"],
     a: "function myFunction()"},
   
    {q: "Which builtin method returns the length of the string?",
    options : ["length()",
     "size()",
     "index()",
     "None of the above"],
    a: "length()"},

    {q: "How do you write 'Hello World' in alert box?",
    options : ["AlertBox(\"Hello World\")",
     "msg(\"Hello World\")",
     "Alert(\"Hello World\")",
     "MsgBox(\"Hello World\")"],
    a: "Alert(\"Hello World\")"},
  

    {q: "Which built-in method reverses the order of the elements of an array?",
    options : ["changeOrder(order)",
     "reverse()",
     "sort(order)",
     "None of the above"],
    a: "reverse()"},

    {q: "What is the function of Array object that runs through each element of the array?",
    options : ["concat()",
     "each()",
     "filter()",
     "forEach()"],
    a: "forEach()"}
]


function startQuiz(event){
   
    content.textContent = "";
    quizImage.remove();
    quizBtn.remove();
   
    if(arrQues[i] !== undefined){
       
        console.log(arrQues[i]);
        ques.textContent = arrQues[i].q;
        
            for(var j=0 ; j<arrQues[i].options.length; j++){
                // console.log(arrQues[i].options[j]);
                var li = document.createElement("li");
                li.innerHTML = (j+1) + ". " +arrQues[i].options[j];
                li.setAttribute("id", j);
                ques.append(li);
            }
     i++;    
    }
}

function ansSelection(event){
    event.preventDefault();
   
    if(event.target.matches("li")){
      
       userId = event.target.id;
       console.log("Target Id: " +userId);

        var userAns = arrQues[k].options[userId];
        console.log("userAns: " +userAns);

        if(typeof userId !== "undefined"){
            resultDisplay.textContent = "";
              
            if(userAns === arrQues[k].a){
                console.log("FinaluserSelection " +userId);
                console.log("FinalCorrectAnswer : " +arrQues[k].a);   
                
                resultDisplay.textContent = "Hurray Correct!!"
                resultDisplay.setAttribute("style", "background-color:green; margin: 8px; width:150px; font-size: 20px;");
                
            score = score+10;    
        }else{          
            resultDisplay.textContent = "Oops Wrong!!"
            resultDisplay.setAttribute("style", "background-color:red;  margin: 8px;  width:150px; font-size: 20px;");            totalSeconds = totalSeconds - 10;
            
        }
        k++;
       
    }
   
    startQuiz();
    console.log("My Score" +score);    
    
    console.log("liCount" +liCount);

    if(liCount === arrQues.length){
        console.log("Show Results");
        showResults();
    }
    liCount++;
    
    } 
}

function showResults(){
    stopTimer();
    resultDisplay.textContent="";
    console.log("Inside showResults");
    content.textContent = "";
    queslistEl.innerHTML = "";
    ptag = document.createElement("p");
    ptag.setAttribute("class", "mt-4")
    ptag.textContent = "Completed!!! You secured " +(score/50)*100 +" percentage ";
    content.append(ptag);
    var ptag2 =  document.createElement("p");
    ptag2.textContent = "Your final score: " +score;  
    content.append(ptag2);
    var ptag3 =  document.createElement("p");
    var form = document.createElement("form");
    var div = document.createElement("div");
    div.setAttribute("class", "form-group");
    var label = document.createElement("label");
    label.setAttribute("for", "initials");
    label.textContent = "Your Initials: ";
    label.setAttribute("style", "margin-right:8px;");
    input = document.createElement("input");
     input.setAttribute("type", "text");
     input.setAttribute("name", "initials");
     input.setAttribute("class", "form-control");
     input.setAttribute("id", "initials");
     input.required=true;
     
     var button = document.createElement("button");
     button.setAttribute("type", "submit");
     button.setAttribute("class", "btn btn-primary");
     button.setAttribute("id", "submitBtn");
     button.textContent = "Submit";
     div.append(label);
     div.append(input);
     form.append(div);
     form.append(button);
     ptag3.append(form);  
     content.append(ptag3);
}

function startTimer(){
    interval = setInterval(function() {
        totalSeconds--;
        timer.textContent = "Time : " +totalSeconds;         
             if(totalSeconds<0){
                alert("Time Up!!!");
                stopTimer();
                showResults();
                timer.textContent = "Time : 0";
            }
        }, 1000);
    }

function stopTimer(){
    clearInterval(interval);
    
}

quizBtn.addEventListener("click",  startTimer);
quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);

document.addEventListener("click",function(event){
    event.preventDefault();
  if(event.target.id === 'submitBtn'){
    
     var enteredInitials = document.getElementById("initials").value.trim();
     console.log("enteredInitials" +enteredInitials);
     displayHighscores(enteredInitials,score);
    }
});
 
function displayHighscores(initials, score){
    var userInitials;
    var userScore;
    content.textContent = "";
    highscoreTitle.textContent = "Highscores";
    var title =  document.createElement("p");
    highscoreTitle.append(title);
    highscoreTitle.setAttribute("style","font-size:28px; font-style:bold; padding:25px;  !important");
    if(localStorage.getItem("userInitials") && localStorage.getItem("userScore")){
        userInitials = JSON.parse(localStorage.getItem("userInitials"));
        userScore = JSON.parse(localStorage.getItem("userScore"));  
        console.log("LocalStorageLength" +localStorage.length);
       // if(userInitials.length){
            // localStorage.removeItem('userInitials');
            // localstoreage.removeItem('userScore');
          
      //  }
    }else{
        userInitials = [];
        userScore = [];
    }
      if(initials!=="" && score!==""){         
        console.log("Hey I'm in" +initials);
        userInitials.push(initials);
        userScore.push(score);

        localStorage.setItem("userInitials", JSON.stringify(userInitials));
        localStorage.setItem("userScore", JSON.stringify(userScore));
    }

    var finalInitials = JSON.parse(localStorage.getItem("userInitials"));
    var finalScore = JSON.parse(localStorage.getItem("userScore"));
   console.log("FinalInitials" +finalInitials);
    if(finalInitials!=null){
     for(var values= 0; values<finalInitials.length; values++){
           console.log(finalInitials[values]);
           console.log(finalScore[values]);
           var highscoreValue1 = document.createElement("p");
           highscoreValue1.setAttribute("style","margin:16px 0; font-size:18px;");
           highscoreValue1. textContent = finalInitials[values]+ " - " +finalScore[values]; 
           highscoreDisplay.prepend(highscoreValue1);
     }
    highscoreTitle.append(highscoreDisplay);
    }

   

    console.log("Highscore Display Value" +highscoreDisplay);
    
    var button1 = document.createElement("button");
    button1.setAttribute("id", "goBack");
    button1.setAttribute("class", "btn btn-primary mr-5");
    button1.textContent = "Go Back";

    var button2 = document.createElement("button");
    button2.setAttribute("id", "clearHighscores");
    button2.setAttribute("class", "btn btn-primary");
    button2.textContent = "Clear Highscores";

    // highscoreDisplay.append(button1);
    // highscoreDisplay.append(button2);
    highscoreTitle.append(button1);
    highscoreTitle.append(button2);

    button1.addEventListener("click", function(event){
        event.preventDefault();
        window.location.reload();
    });

    button2.addEventListener("click", function(event) {
          event.preventDefault();
        //   highscoreValue1.textContent = "";
        if(event.target.id === 'clearHighscores'){
          localStorage.removeItem('userInitials');
          localStorage.removeItem('userScore');
          highscoreDisplay.textContent="";
        //   displayHighscores(highscoreInitials,score);
        //   window.location.reload();
        }
    });

  }

  colHeader.addEventListener("click", function(event){
        event.preventDefault();
        console.log(event.target.id);
        if(event.target.id === 'highscore'){
            highscoreTitle.textContent="";
            highscoreDisplay.textContent="";
            quizImage.remove();
            quizBtn.remove();
            displayHighscores(highscoreInitials,score);
        }
  });

  


