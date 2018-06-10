//Javascript file containing working code for the Star Wars: Starfighter Challenge


//Variable lists
var playerHP = 1;
var playerAttack = 1;
var playerOriginalAttack = 1;
var selectedFighter = '';
var characterSourceImage = '';
var currentOpponent = '';
var defeatedOpponentCounter = 0;
var opponentHP = 0;
var opponentCounterAttack = 0;


$(document).ready(function () {

    //===========================
    //create new game function here
    //===========================



//BEGIN MAJOR SECTION 1: Game Set Up
//============================================
    //Click funtion to define selected fighter and write in initial stats from data attributes in HTML
    //and continue to set up the character and remaining opponents boxes
    
    $(".star-ship").on("click", function () {
        selectedFighter = $(this).data("ship");
        playerHP = $(this).data("health");
        playerAttack = $(this).data("attack");
        playerOriginalAttack = $(this).data("attack");

        //**** if statement to set picture source to correct fighter in the character box, or 
        //use another data attribute to define the source

        var characterSourceImage = $(this).data('image-link');
        $('#chosen-character').attr('src', characterSourceImage);

        // set display of the character select box to 'none'

        $('#chooseCharacter').hide();

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

        //Hide images in defeated opponents box

        $('.defeated-opponents').hide();

        alert('Choose your first opponent on the right!');
    });
//END MAJOR SECTION ONE: Game Set Up
//=========================================================
//BEGIN MAJOR SECTION TWO: Opponent Selection

    //Possibly add boolean to ensure a new opponent can only be chosen
    //after the current opponent is defeated

    //Identify selected opponent and display image in current opponent box and populate current opponent stats

    $('.up-next').on('click', function() {
        currentOpponent = $(this).data('ship');
        var opponentImage = $(this).data('image-link');
        opponentHP = $(this).data('health');
        opponentCounterAttack = $(this).data('counter-attack');
        $('#current-opponent').attr('src',opponentImage);
        
    //Hide selected opponent in remaining opponents box

    $(this).hide();

    });//Close Opponent Selection


//END MAJOR SECTION TWO: Opponent Selection
//=================================================
//BEGIN MAJOR SECTION THREE: Attack Dynamics and Battle

    //Use Fire! button to trigger attack, decrease opponent health, and increase attack power
    

    //Use if statement to see if opponent is defeated. Move current opponent to defeated box add 1 to defeated 
    //opponent counter and check for victorty. If victorious, display a you win screen with
    //a new game button.
        $('#fire-button').on('click', function() {

            opponentHP = opponentHP - playerAttack;
            console.log('hp' + opponentHP);
        
            playerAttack = playerAttack + playerOriginalAttack;
            console.log('sa '+ playerAttack);

            //check for current opponent defeat and overall victory
            if(opponentHP <= 0) {
                defeatedOpponentCounter = defeatedOpponentCounter + 1;
                if (defeatedOpponentCounter == 3) {
                    alert('Congratulations! You are Victorious!');
                  //  newGame();
                }
                alert('Select your next opponent!');
            } 


    //Continue with opponents counter attck and health decrease of character
            playerHP = playerHP - opponentCounterAttack;
            console.log(playerHP);
    //Use if statement to see if character is defeated, if so, display game over and New Game button
            if (playerHP <= 0) {
                alert('Game Over! The Force is not strong with this one.')
                //newGame();
            }


//END MAJOR SECTION THREE: Attack Dynamics and Battle
//=================================================
//BEGIN MAJOR SECTION FOUR: Moving defeated characters s



    });
});