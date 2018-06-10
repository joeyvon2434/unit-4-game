//Javascript file containing working code for the Star Wars: Starfighter Challenge


//Variable lists
   var selHP =1;
   var selAttack =1;
   var selOriginalAttack =1;


   $( document ).ready(function () {


//Click funtion to define selected fighter and write in initial stats rom data attributes in HTML
    $(".star-ship").on("click", function () {
        selectedFighter = $(this).data("ship");
            selHP = $(this).data("health");
            selAttack = $(this).data("attack");
            selOriginalAttack = $(this).data("counter-attack");
            //**** if statement to set picture source to correct fighter in the character box, or us another data attribute
            //**** set display of the character select box to 'none'
            //**** set display of game box to show
        console.log(selectedFighter);
        console.log(selHP);
        console.log(selAttack);
        console.log(selOriginalAttack);
    });




});