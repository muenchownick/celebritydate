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

    alert("kanye: " + kanyeScore + "\nbeyonce: " + beyonceScore + "\nother: " + otherScore);
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
};
