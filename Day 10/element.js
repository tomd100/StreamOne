// Note that everything is in the document.ready function - this is a good idea because it prevents things from running until the page has fully loaded. 


$(document).ready(function(){

	$(".box").on("click", function(){
		var classNames = "." + $(this).attr("class").split(" ")[1];
		$(classNames).css("background-color", "red");

	});

});