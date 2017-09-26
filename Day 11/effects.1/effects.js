$(document).ready(function() {
    $("h1").on("click", function() {
            if ($("img").attr("src") == "img/1.png") {
                $("img").attr("src", "img/2.png")
            } else {
                alert("It's already the right image!");
            }
    })
})