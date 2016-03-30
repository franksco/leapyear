$(document).ready(function() {

// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0 )) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear (year);
    $("#result"). text(result);

    $("year").text(year);

    if (isNaN(year)) {
      alert("please put in a year! ex. 1928");
    } else if (!result) {
      $(".not").text("not");
    } else if (result) {
      $(".not").text("");
    } else {
      alert("please put in a year! ex. 1928");
    }

    $("result").show();
  });
});
