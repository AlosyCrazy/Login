var player1Name = localStorage.getItem("player1");
var player2Name = localStorage.getItem("player2");
var player1Score = 0;
var player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name+": ";
document.getElementById("player2Name").innerHTML = player2Name+": ";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("player_question").innerHTML = "turno de pergunta: "+player1Name;
document.getElementById("player_answer").innerHTML = "turno de resposta: "+player2Name;

var num1, num2, resposta;
function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    resposta = parseInt(num1)*parseInt(num2);

    var questionNumber = "<h4>"+num1+"x"+num2+"</h4>";
    var inputBox = "<br>Resposta: <input type='text' id='inputCheckBox'>";
    var checkButton = "<br><button onclick='check()' class='btn btn-info'>CHECAR</button>";
    var row = questionNumber+inputBox+checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
var questionTurn ="player1";
var answerTurn ="player2";
var getAnswer;

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    if(getAnswer == resposta){
        if(answerTurn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "turno da pergunta: " + player2Name;
    }
    else{
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "turno da pergunta: " + player1Name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "turno de resposta: " + player2Name;
    }
    else{
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "turno de resposta: " + player1Name;
    }
    document.getElementById("output").innerHTML = " ";
}