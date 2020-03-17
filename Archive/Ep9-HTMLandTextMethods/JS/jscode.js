$(document).ready(function() {
    $("#test1").click(function() {
        $("#left p").html("<h3>Tabbey Cats</h3>");
    })

    $("#test2").click(function() {
        $("#left p").text("Fat cats")
    })

    $("#test3").click(function() {
        $("#left h3:empty").text("h3 text")
    })
})