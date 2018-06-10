//Javascript file containing working code for the Star Wars: Starfighter Challenge


//Variable lists
   var selHP =1;
   var selAttack =1;
   var selOriginalAttack =1;
   var selectedFighter ='';
   var characterSourceImage ='';


   $( document ).ready(function () {


//Click funtion to define selected fighter and write in initial stats from data attributes in HTML
//and continue to set up the character and remaining opponents boxes
    $(".star-ship").on("click", function () {
        selectedFighter = $(this).data("ship");
            selHP = $(this).data("health");
            selAttack = $(this).data("attack");
            selOriginalAttack = $(this).data("counter-attack");
            //**** if statement to set picture source to correct fighter in the character box, or 
            //use another data attribute to define the source
            characterSourceImage = $(this).data('image-link');
            $('#chosen-character').attr('src',characterSourceImage);
            // set display of the character select box to 'none'
        $('#chooseCharacter').hide();
        console.log(selectedFighter);
        console.log(selHP);
        console.log(selAttack);
        console.log(selOriginalAttack);
        //set game box to display, and display the non-selected characters in the remaining window
            //game Box
        $('#game-box').show();

            //Hide selected fighter from remaining fighters box
        if ($('#xWing').data('ship') == selectedFighter) {
            $('#xWing').hide();
        };
        if ($('#aWing').data('ship') == selectedFighter) {
            $('#aWing').hide();
        };
        if ($('#tieFighter').data('ship') == selectedFighter) {
            $('#tieFighter').hide();
        };
        if ($('#tieInterceptor').data('ship') == selectedFighter) {
            $('#tieInterceptor').hide();
        };
    });

//Section to display opponents after the player selects their character



});