$(document).ready(function(){
    let name = $("#name");
    let button = $("#btn");
    let print = $("#message");

    $("button").click(function(){
        let name = ($("input").val());
        print.text(`Hello there ${name}!`);
    })
});


