$(document).ready(function() {
	
	
	$("li:regex(id, #stream*)").on("click", function() {
		
		var clickedClass = $(this).attr("id");
		document.write(clickedClass);
		
		// if(left(clickedClass, 6) === "stream"){
		
		// 	$(".stream1").removeClass('highlight_stream');
		// 	$(".stream2").removeClass('highlight_stream');
		// 	$(".stream3").removeClass('highlight_stream');
		  	
	 // 		$("." + clickedClass).addClass('highlight_stream');
		// }
		
	})

 //	$("#stream1_btn").on("click", function() {
 //		$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream1").addClass('highlight_stream');
	// });
	// $("#stream2_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream2").addClass('highlight_stream');
	// });
	// $("#stream3_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream3").addClass('highlight_stream');
	// });


}); 
