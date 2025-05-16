alert("Hello");
// $("button").on("click");
var count = 0;


$("button").click(function() {
    count++;

    switch (count) {
        case 1:
            alert("Hello to you too!");
            break;
        case 2:
            alert("Hello Again!");
            break;
        case 3:
            alert("You're back, Again....");
            break;
        case 4:
            alert("You sure like clicking this button.");
            break;
        default:
            alert("That's Enough Clicking For You!")
            $("button").fadeOut();  
            break;
    }
});

$("Logo").click(function(){
    alert("Nuhh uhhh");
});

// $("button").mouseover(function(){
//     alert("yahooo");
// })