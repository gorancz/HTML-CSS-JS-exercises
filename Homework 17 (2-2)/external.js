$(document).ready(function(){

    $("#btn").click(function(){

        let text = $("#text").val();
        let color = $("#color").val();
        let result = $("#newHeader");

        if (text) {
            result.text(`${text} ${color}`).css("color", "green");
            } else {
                result.text("Error message").css("color", "red");
                }
            })
        });



