var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");
var container = document.querySelector(".container");

var i=0; var k=0;
var score=0;
var userId = "";
var liCount = 1;  
var wrongAns = false;
var interval;


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

        var userAns = arrQues[k].options[userId];
        console.log("userAns: " +userAns);
        var validateAns =  document.createElement("p"); 
        validateAns.setAttribute("id", "result");

        if(typeof userId !== "undefined"){
               validateAns.innerText = "";
               wrongAns = false;
            if(userAns === arrQues[k].a){
                console.log("FinaluserSelection " +userId);
                console.log("FinalCorrectAnswer : " +arrQues[k].a);   
                
                validateAns.textContent = "Hurray Correct!!"
                validateAns.setAttribute("style", "background-color:green; margin: 10px; font-size: 28px;");
                
            score++;    
        }else{          
            validateAns.textContent = "Oops Wrong!!"
            validateAns.setAttribute("style", "background-color:red;  margin: 10px; font-size: 28px;")
            wrongAns = true;
            
        }
        k++;
        queslistEl.append(validateAns);
       
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
    var form = document.createElement("form");
    var div = document.createElement("div");
    div.setAttribute("class", "form-group");
    var label = document.createElement("label");
    label.setAttribute("for", "initials");
    label.textContent = "Your Initials: ";
    label.setAttribute("style", "margin-right:8px;");
    var input = document.createElement("input");
     input.setAttribute("type", "text");
     input.setAttribute("name", "initials");
     input.setAttribute("class", "form-control");
     input.setAttribute("id", "initials");
     input.required=true;
     
     var button = document.createElement("button");
     button.setAttribute("type", "submit");
     button.setAttribute("class", "btn btn-primary");
     button.textContent = "Submit";
     div.append(label);
     div.append(input);

     form.append(div);
     form.append(button);
     ptag3.append(form);  
     content.append(ptag3);
    
//      <form>
//   <div class="form-group">
//     <label for="email">Email address:</label>
//     <input type="email" class="form-control" placeholder="Enter email" id="email">
//   </div>
//  
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
}

function startTimer(){
    
    console.log("Inside start timer");
    var totalSeconds = 80;
    var secondsElapsed = 0;
  
    var timer = document.createElement("div");
    timer.setAttribute("class", "time");
    timer.setAttribute("style", "position: absolute; top: 8px; right: 16px; font-size: 18px;");
    timer.textContent = "Time : ";
    var spanSeconds = document.createElement("span");
    spanSeconds.setAttribute("id", "seconds");
    
    if (totalSeconds > 0) {
         interval = setInterval(function() {
            secondsElapsed++; 
            var secondsLeft;  
            console.log("Wrong Ans" + wrongAns);
            if(wrongAns){
               
                var sec = (totalSeconds - secondsElapsed);
                secondsLeft =  sec - 10;
                // console.log("newSecondsLeft" +secondsLeft);    
                        
            }else{
                
                secondsLeft = totalSeconds - secondsElapsed ;        
                
            }
            // console.log("secondsLeft" +secondsLeft);   
            spanSeconds.textContent = secondsLeft;
            timer.append(spanSeconds);
            container.append(timer);
            
        }, 1000);
        } 
    }

function stopTimer(){
    clearInterval(interval);
}

quizBtn.addEventListener("click",  startTimer);
quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);
