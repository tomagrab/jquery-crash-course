$(document).ready(function() {
    $("#test1").click(function() {
        $("#right").fadeIn(2500);
    });
    $("#test2").click(function() {
        $("#right").fadeOut(2500);
    });
    $("#test3").click(function() {
        $("").fadeTo("para");
    });
    
    var width = $(".content-box").css("width");

    $(".content-box").animate(width);

})
