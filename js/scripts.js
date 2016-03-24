// $(document).ready(function() {
//   var result = parseInt(prompt("How tall are you in Inches?"));
//   if (result >= 72) {
//     $(".over72In").addClass("highlight");
//   } if (result >= 60) {
//     $(".over60In").addClass("highlight");
//   } if (result <= 84) {
//     $(".under84In").addClass("highlight");
//   } if (result <= 72) {
//     $(".under72In").addClass("highlight");
//   }
// });
var kanyeScore = 0;
var beyonceScore  = 0;
var otherScore = 0;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var result = $("input:radio[name=location]:checked").val();
    addScore(result);
    var result = $("input:radio[name=question2]:checked").val();
    addScore(result);
    var result = $("input:radio[name=question2]:checked").val();
    addScore(result);
    // var result = $("input:radio[name=events]:checked").val();
    // addScore(result);

    if (otherScore < kanyeScore > beyonceScore ) {
      alert("kanye");
    } else  if (beyonceScore > otherScore) {
      alert("beyonce");
    } else {
      alert("other");
    }
  });
});

var addScore = function (result) {
  if (result === "kanye") {
    kanyeScore = kanyeScore + 1;
  }
  if (result === "beyonce") {
    beyonceScore += 1;
  }
  if (result === "other") {
    otherScore += 1;
  }
  alert("kanye: " + kanyeScore + "\nbeyonce: " + beyonceScore + "\nother: " + otherScore);
};
