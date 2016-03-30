$(document).ready(function() {

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !=== 0)) || (year % 400 === 0 )) {
    return true;
  }
  else {
    return false;
  }
};

$("form#leap-year").submit(function(event){
    event.preventdefault();
    var year = parsInt($("input#year").val());
    var result = leapYear (year);
    $("#result"). text(result);

    $("year").text(year);

    if (!result) {
      $(".not"). text("not");
    } else {
      $(".not").text("");
    }

    $("result").show();
  });
});
