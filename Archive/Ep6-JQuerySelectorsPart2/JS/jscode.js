//My HTML is different than the HTML from the tutorial so I'm using a different selector.
//Sytax: $(".class > child");

//First, I selected the "content-box-content" class, then I used '>' to say I want to use a child 
//element of the "content-box-content" class.

//I am using ".toggle()" instead of ".hide()" so that the button toggles between 
//.hide() and .show() when clicked

//Also, I added more buttons for extra practice



$(document).ready(function(){
    $("#even").click(function() {
        $(".content-box-content > div:even").toggle();          //Toggles even divs
    })
    
    $("#odd").click(function() {
        $(".content-box-content > div:odd").toggle();           //Toggles odd divs
    })

    $("#all").click(function() {
        $(".content-box-content > div").toggle();               //Toggles all divs
    })

    $("#cen").click(function() {
        $("p:contains('center')").toggle();                     //Toggles paragraphs containing the word 'center'
    })
                                                                
});