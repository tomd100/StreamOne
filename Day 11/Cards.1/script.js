$(document).ready(function() {
 //
 
    $("#button1").on("mouseenter",function(){
    
        $("#button1").removeClass("makeRed").addClass("makeBorder");
    
    })
      
    $("#button1").on("mouseleave",function(){
    
        $("#button1").removeClass("makeBorder").addClass("makeRed");
    
    })
     
    $("#button1").on("click",function(){
    
        $("#button1~p").hide("slow").show("slow");
    
    })
    
    $("#button1").on("click",function(){
    
        $("#button1~p").fadeOut("slow").fadeIn("slow");
    
    })
        
      

})

