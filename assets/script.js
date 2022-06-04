var m = entry();

$("#currentDay").text(entry().format('LLLL'));

$(document).ready(function() {
    colorChange ();
    WebGL2RenderingContext();
});

function colorChange () {

    var currentTime = entry().hours();
    console.log("Current Time + currentTime");

    $(.input").each(function() {
        var scheduledTime = parseInt($(this).attr("id"))
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else if (currentTime < scheduledTime){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
});
}

var eventText;
var eventTime;

$("saveBtn")