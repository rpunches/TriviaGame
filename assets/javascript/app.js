
$("#openScreen").show();
$("#quizScreen").hide();
$("resBtn").hide();
var timer = 90;
function startTimer() {
    
    $("#quizScreen").show();
    var interval = setInterval(function () {
        timer--;
        $(".timer").text(timer);
        if (timer === 0) clearInterval(interval);
    }, 1000);
}

function submitAnswers() {
    var answers = ["c", "b", "c", "a", "c", "b", "a", "b", "c", "c"];
    var total = 10;
    var score = 0;

    var q1 = document.forms["quoteForm"]["q1"].value;
    var q2 = document.forms["quoteForm"]["q2"].value;
    var q3 = document.forms["quoteForm"]["q3"].value;
    var q4 = document.forms["quoteForm"]["q4"].value;
    var q5 = document.forms["quoteForm"]["q5"].value;
    var q6 = document.forms["quoteForm"]["q6"].value;
    var q7 = document.forms["quoteForm"]["q7"].value;
    var q8 = document.forms["quoteForm"]["q8"].value;
    var q9 = document.forms["quoteForm"]["q9"].value;
    var q10 = document.forms["quoteForm"]["q10"].value;

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("you missed question " + i);
            return false;
        }
    }

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    } 
    alert('You scored ' + score + " out of " + total);
    // $("resBtn").show();
   
    // var restartButton = document.createElement("input")
    //   restartButton.type = "submit";
    //   restartButton.value = "Try Again!"
    //   document.body.appendChild(restartButton);
    // //   $("#openScreen").show();
    // //   $("#quizScreen").hide();
    //   restartButton.addEventListener("click", resetGame, true);

}

function resetGame() {
    $("#openScreen").show();
    $("#quizScreen").hide();
    $("#resBtn").hide();
    var score = 0;
    timer = 90;
    startTimer();
    
}

$('#quoteGame').on('submit', function (e) {
    e.preventDefault();

});


