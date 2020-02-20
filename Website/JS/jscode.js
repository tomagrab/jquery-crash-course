//My HTML is different than the HTML from the tutorial so I'm using a different selector.
//Sytax: $(".class > child");

//First, I selected the "content-box-content" class, then I used '>' to say I want to use a child 
//element of the "content-box-content" class.

//I am using ".toggle()" instead of ".hide()" so that the button toggles between 
//.hide() and .show() when clicked

//Also, I added more buttons for extra practice



$(document).ready(function(){
    $("#test1").click(function() {
        $(".content-box-content > div:has(b)").toggle();          //Toggles even divs
    })
    
    $("#test2").click(function() {
        $("#center > ul li:nth-child(2)").toggle();           //Toggles odd divs
    })

    /*$("#test3").click(function() {
        $(".content-box-content > div").toggle();               //Toggles all divs
    })

    $("#test4").click(function() {
        $("p:contains('center')").toggle();                     //Toggles paragraphs containing the 
    }) */                                                       //word 'center'
                                                                
});