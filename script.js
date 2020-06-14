var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");

var i=0; 

var arrQues = [
    {q: "Where is the correct place to insert a JavaScript? ",  
    options : ["The <body> section", 
     "Both the <head> section and <body> section are correct",
     "The <head> section",
     "Below the <body> section"],
     a: "Below the <body> section"},
   
    {q: "How do you write 'Hello World' in alert box?.",
    options : ["AlertBox(\"Hello World\")",
     "msg(\"Hello World\")",
     "Alert(\"Hello World\")",
     "MsgBox(\"Hello World\")"],
    a: "Alert(\"Hello World\")"}
]
   
//     {q: "Tea contains more caffeine than coffee and soda.", a: "No"},
   
//     {q: "A cube has 16 straight edges in total.", a:"No"},

//     {q: "Lungs are the largest internal organ in the human body.",a:"No"
    
// }];

function startQuiz(){
   
    content.textContent = "";
    quizBtn.remove();
    console.log(arrQues[i]);
    if(arrQues[i] !== undefined){
       
        console.log(arrQues[i].q);
        ques.textContent = arrQues[i].q;
 
            for(var j=0 ; j<arrQues[i].options.length; j++){
                console.log(arrQues[i].options[j]);
                var li = document.createElement("li");
                li.innerHTML = (j+1) + ". " +arrQues[i].options[j];
                ques.append(li);
            }
     i++;
    //    (arrQues[i].q);
}
}

function ansSelection(event){
    if(event.target.matches("li")){
        startQuiz();
    }
}
quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);
