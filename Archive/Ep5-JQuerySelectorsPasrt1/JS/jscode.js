$(document).ready(function(){
    $("button").click(function() {
        $(".content-box-content > #left p:first").hide();       //My HTML is different than the HTML from the tutorial
    })                                                          //so I'm using a different selector.
                                                                //Sytax: $(".class > child");
});                                                             //First, I selected the "content-box-content" class,
                                                                //then selected the first div, which is a child of
                                                                //"content-box-content"