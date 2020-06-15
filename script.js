var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");

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
     console.log("Inside showResults");
     content.textContent = "";
     queslistEl.innerHTML = "";

}



quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);
