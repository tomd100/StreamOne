// $(document).ready(function() {
 //
 
     function vidplay() {
      var video = document.getElementById("video1");
      var button = document.getElementById("play");
      if (video.paused) {
          video.play();
          // button.textContent = "||";
      } else {
          // video.pause();
          // button.textContent = ">";
      }
    }
        
    // function restart() {
    // var video = document.getElementById("Video1");
    // video.currentTime = 0;
    // }

    // function skip(value) {
    // var video = document.getElementById("Video1");
    // video.currentTime += value;
    // }      
    
    $("#play").on("click", function(){
        var video = document.getElementById("video1");
        video.currentTime = 10;
    	vidplay();
    })
    
    $("#playPlus").on("click", function(){
        var video = document.getElementById("video1");
        video.currentTime = 20;
    	vidplay();	
    })
      

// })

