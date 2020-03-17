$(document).ready(function() {
    $("#test1").click(function() {
        $("#left p:first").addClass("para");
    });
    $("#test2").click(function() {
        $("#left p:first").removeClass("para");
    });
})