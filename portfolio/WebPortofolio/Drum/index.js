var numberOfButtons = document.querySelectorAll(".drum").length;// return how many drum classes


for (var i = 0; i < numberOfButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener /*Adding Event listener(Click) to all drum classes*/ ("click", function () {//When a click is detected
         
        console.log(this.innerHTML);

        var buttonInnerHTML = this.innerHTML;
        doSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

} );

}

//To detect keyboard pressed

document.addEventListener("keydown", function(Event){
    doSound(Event.key);
    buttonAnimation(Event.key);
});

function doSound(key){
    switch (key){
            case "w":
                var crashSounds = new Audio('sounds/crash.mp3');
                crashSounds.play();
                break;
            case "a":
                var kickSounds = new Audio('sounds/kick-bass.mp3');
                kickSounds.play();
                break;
            case "s":
                var tom1Sounds = new Audio('sounds/tom-1.mp3');
                tom1Sounds.play();
                break;
            case "d":
                var tom2Sounds = new Audio('sounds/tom-2.mp3');
                tom2Sounds.play();
                break;
            case "j":
                var tom3Sounds = new Audio('sounds/tom-3.mp3');
                tom3Sounds.play();
                break;
            case "k":
                var tom4Sounds = new Audio('sounds/tom-4.mp3');
                tom4Sounds.play();
                break;
            case "l":
                var snareSounds = new Audio('sounds/snare.mp3');
                snareSounds.play();
                break;

            default: console.log(buttonInnerHTML);

        }
}

function buttonAnimation(currentKey){
        var playableButton = document.querySelector("." + currentKey);

        playableButton.classList.add("pressed");

        setTimeout(function(){
            playableButton.classList.remove("pressed");
        }, 150);
}