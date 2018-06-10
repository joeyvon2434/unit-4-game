//Javascript file containing working code for the Star Wars: Starfighter Challenge


//Variable lists
   var selHP =1;
   var selAttack =1;
   var originalAttack =1;


   $( document ).ready(function () {


//Click funtion to define selected fighter and write in initial stats
    $(".star-ship").on("click", function () {
        selectedFighter = $(this).attr('value');
            selHP = $(this).data("health");
            selAttack = $(this).data("attack");
            selOriginalAttack = $(this).data("counter-attack");
            //if statement to set picture source to correct fighter, or us another data attribute
        

    });




});