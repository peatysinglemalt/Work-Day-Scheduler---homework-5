$(document).ready(function () {
// used Moment.js to get today's info
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 

    currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").text(currentDay);

});