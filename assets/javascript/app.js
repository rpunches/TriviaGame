

function startTimer() {
    timer = 90;

    var interval = setInterval(function () {
        timer--;
        $(".timer").text(timer);
        if (timer === 0) clearInterval(interval);
    }, 1000);
}


function submitAnswers(e) {
    e.preventDefault();
    var total = 10;
    var score = 0;

    var q0 = document.forms["quoteForm"]["q0"].value;
    var q1 = document.forms["quoteForm"]["q1"].value;
    var q2 = document.forms["quoteForm"]["q2"].value;
    var q3 = document.forms["quoteForm"]["q3"].value;
    var q4 = document.forms["quoteForm"]["q4"].value;
    var q5 = document.forms["quoteForm"]["q5"].value;
    var q6 = document.forms["quoteForm"]["q6"].value;
    var q7 = document.forms["quoteForm"]["q7"].value;
    var q8 = document.forms["quoteForm"]["q8"].value;
    var q9 = document.forms["quoteForm"]["q9"].value;

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("you missed question " + i);
            return false;
        }
    }

    var answers = ["c", "c", "b", "c", "a", "c", "b", "a", "b", "c"];

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }
    $('#quoteGame').on('submit', function(e){
        e.preventDefault();
    });
    alert('You scored ' + score + " out of " + total);

    var results = document.getElementById('results');
    resutls.innerHTML = '<h3> You scored <span' + score + '</span> out of <span>' + total + '</span></h3>';
    console.log(score);


    return false;
}


// function getCheckedValue() {
//     var check = true;
//     $("input:radio").each(function () {
//         var name = $(this).attr("name");
//         if ($("input:radio[name=" + name + "]:checked").length == 0) {
//             check = false;

//         }
//     });

//     if (check) {
//         function displayScore() {
//             for (var i = 0; i < tot; i++) {
//                 if (getCheckedValue("q" + i) === answers[i]);
//                 score++;
//             }
//         }
//     }
// }
// function results() {
//     alert("Your score is " + score + "/" + tot);
//     console.log(score);
// }
// function getCheckedValue(radioName) {
    // var radios = $("input[name='q'+y]:checked").val();
    // for (var y = 0; y < radios.length; y++)
    //     if (radios[y].checked) return radios[y].value;
// };




// $("#submit").on("click", function()

