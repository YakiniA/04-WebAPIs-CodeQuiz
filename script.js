var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var i=0; var k=0;
var score=0;
var userId = "";
var arrayLength = false;
var liCount = 1;

var arrQues = [
    {q: "Where is the correct place to insert a JavaScript? ",  
    options : ["The <body> section", 
     "Both the <head> section and <body> section are correct",
     "The <head> section",
     "Below the <body> section"],
     a: "Below the <body> section"},
   
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

            // if(event.target.matches("li")){     
            // console.log("ArrayLength " +(arrQues.length));
            // console.log("i value" +i);
            // }

        var userAns = arrQues[k].options[userId];
        console.log("userAns: " +userAns);
        if(typeof userId !== "undefined"){
                
            if(userAns === arrQues[k].a){
                console.log("FinaluserSelection " +userId);
                console.log("FinalCorrectAnswer : " +arrQues[k].a)
            score++;    
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
     console.log("Inside showResults");
     content.textContent = "";
     queslistEl.innerHTML = "";
     var ptag = document.createElement("p");
     ptag.textContent = "Congratulations!!! You secured " +(score/arrQues.length)*100 +" percentage ";
     content.append(ptag);
    //  var table = document.createElement("table");
    //  var tr1 = document.createElement("tr");
    //  var tr2 = document.createElement("tr");
    //  var th = document.createElement("th");
    var ptag2 =  document.createElement("p");
    ptag2.textContent = "Your final score: " +score;  
    content.append(ptag2);
    var ptag3 =  document.createElement("p");
    var label = document.createElement("label");
    label.setAttribute("for", "initials");
    label.textContent = "Your Initials: ";
    label.setAttribute("style", "margin-right:8px;");
    var input = document.createElement("input");
     input.setAttribute("type", "text");
     input.setAttribute("name", "initials");
     input.setAttribute("id", "initials");
     
     ptag3.append(label);
     ptag3.appendChild(input);
     content.append(ptag3);
    
}

function startTimer(){
console.log("Inside start timer");
var totalSeconds = 80;
var secondsElapsed = 0;
   if (totalSeconds > 0) {
      var interval = setInterval(function() {
        secondsElapsed++;  
        var secondsLeft = totalSeconds - secondsElapsed;          
        var minutesLeft = Math.floor(secondsLeft / 60); 
        var secondsLeft2 = Math.floor(secondsLeft % 60); 
        console.log("Secondsleft" +secondsLeft2);
        console.log("minutesleft" +minutesLeft);
        minutes.textContent = minutesLeft;
        seconds.textContent = secondsLeft2;
       }, 1000);
       } 
//      else {
//        alert("Minutes of work/rest must be greater than 0.")
//    }
}



quizBtn.addEventListener("click",  startTimer);
quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);
