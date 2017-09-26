// JavaScript File

$(document).ready(function() {
    $(".box").on("click", function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        //document.write(classNames);
        $("." + classNames[1]).css("background-color", "red");
    });
});