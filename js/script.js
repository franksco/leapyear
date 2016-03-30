$(document).ready(function() {

var leapYear = function(year) {
  return false;
};




$("form#leap-year").submit(function(event){
    event.preventdefault();
    var year = parsInt($("input#year").val());
    var result = leapYear (year);
    $("#result"). text(result);
  });
});
