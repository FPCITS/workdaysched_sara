var m = moment();

$("#currentDay").text(moment().format('LLLL'));

$(document).ready( function() {
    colorChange ();
    renderText();
});

function colorChange () {

    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);

    $(".input").each(function() {
        var scheduledTime = parseInt($(this).attr("id"))
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
            $(this).removeClass("present");
        } else if (currentTime < scheduledTime){
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
});
}

var entryText;
var entryTime;

$(".saveBtn").click(function() {
    entryText = $(this).siblings(".input").val();
    console.log(entryText);
    entryTime = $(this).siblings(".hour").text();
    console.log(entryTime);
    localStorage.setItem(entryTime, JSON.stringify(entryText));

    colorChange ();
    renderText ();


});

$(".deleteBtn").click(function() {
    entryText = $(this).siblings(".input").val("");
    entryText = $(this).siblings(".input").val();
    entryTime = $(this).siblings(".hour").text();
    localStorage.setItem(entryTime, JSON.stringify(entryText));

colorChange ();
renderText ();

});

function renderText() {
 
    var saveEntryText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEntryText9);

    var saveEntryText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEntryText10);

    var saveEntryText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEntryText11);

    var saveEntryText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEntryText12);

    var saveEntryText13 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveEntryText13);

    var saveEntryText14 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveEntryText14);

    var saveEntryText15 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveEntryText15);

    var saveEntryText16 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#17").val(saveEntryText16);

    var saveEntryText17 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveEntryText17);

};