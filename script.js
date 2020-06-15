var quizBtn = document.getElementById("quizButton");
var ques = document.getElementById("question");
var content = document.querySelector(".content");
var queslistEl = document.getElementById("question-list");

var i=0; var k=0;
var score=0;
var userId = "";

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

//   {q: "Tea contains more caffeine than coffee and soda.", a: "No"},
   
//     {q: "A cube has 16 straight edges in total.", a:"No"},

//     {q: "Lungs are the largest internal organ in the human body.",a:"No"
    
// }];

function startQuiz(event){
    
    content.textContent = "";
    quizBtn.remove();
    
    // console.log(arrQues[i]);
    if(arrQues[i] !== undefined){
       
        // console.log(arrQues[i].q);
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
       
    //    console.log(event.currentTarget.value);
       console.log("Target Id: " +userId);

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

    }
   
}

quizBtn.addEventListener("click", startQuiz);
queslistEl.addEventListener("click", ansSelection);
