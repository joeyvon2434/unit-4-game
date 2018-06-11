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
var opponentImage='';
var allowOpponentSelect = true;


$(document).ready(function () {

    //Display and hide instructions

    $('#instructions-button').on('click', function() {
        $('#instructions-box').css('display', 'block');
    });

    $('#close-instructions').on('click', function() {
        $('#instructions-box').hide();
    });

    //===========================
    //create new game function here
    //===========================
    $('#new-game-button').on('click', function() {
        playerHP = 1;
        playerAttack = 1;
        playerOriginalAttack = 1;
        selectedFighter = '';
        characterSourceImage = '';
        currentOpponent = '';
        defeatedOpponentCounter = 0;
        opponentHP = 0;
        opponentCounterAttack = 0;
        opponentImage = '';
        allowOpponentSelect = true;
        $('#game-box').hide();
        $('#new-game-box').hide();
        $('#new-game-button').hide();
        $('#defeated-box').text('');
        $('#xWing').show();
        $('#aWing').show();
        $('#tieFighter').show();
        $('#tieInterceptor').show();
        $('#chooseCharacter').show();

    });


    //===========================
    //Display New Game Button here
    //===========================

    function displayNewGameButton() {
        $('#new-game-box').show();
        $('#new-game-button').show();
    }


//BEGIN MAJOR SECTION 1: Game Set Up
//============================================
    //Click funtion to define selected fighter and write in initial stats from data attributes in HTML
    //and continue to set up the character and remaining opponents boxes
    
    $(".star-ship").on("click", function () {
        $('#current-opponent').hide();
        selectedFighter = $(this).data("ship");
        playerHP = $(this).data("health");
        playerAttack = $(this).data("attack");
        playerOriginalAttack = $(this).data("attack");
        $('#player-health').text('Health: ' + playerHP);

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

        //$('.defeated-opponents').hide();

    });

//END MAJOR SECTION ONE: Game Set Up
//=========================================================
//BEGIN MAJOR SECTION TWO: Opponent Selection

    //Possibly add boolean to ensure a new opponent can only be chosen
    //after the current opponent is defeated

    //Identify selected opponent and display image in current opponent box and populate current opponent stats
    //but first verify that an opponent has been selected.

   

    $('.up-next').on('click', function() {

        if (allowOpponentSelect == true) {
        currentOpponent = $(this).data('ship');
        opponentImage = $(this).data('image-link');
        opponentHP = $(this).data('health');
        opponentCounterAttack = $(this).data('counter-attack');
        $('#opponent-health').text('Health: ' + opponentHP);
        $('#current-opponent').attr('src',opponentImage);
        $('#current-opponent').show();
        allowOpponentSelect = false;
        
    //Hide selected opponent in remaining opponents box

        $(this).hide();
        } else {
        alert("You must defeat your current opponent before selecting a new opponent.");
        }   

    });//Close Opponent Selection

    

//END MAJOR SECTION TWO: Opponent Selection
//=================================================
//BEGIN MAJOR SECTION THREE: Attack Dynamics and Battle

    //Use Fire! button to trigger attack, decrease opponent health, and increase attack power
    

    //Use if statement to see if opponent is defeated. Move current opponent to defeated box add 1 to defeated 
    //opponent counter and check for victorty. If victorious, display a you win screen with
    //a new game button.
    
   
    
        $('#fire-button').on('click', function() {

        if (allowOpponentSelect == false) {

            opponentHP = opponentHP - playerAttack;
            $('#opponent-health').text('Health: ' + opponentHP);
        
            playerAttack = playerAttack + playerOriginalAttack;
            

            //check for current opponent defeat and overall victory
            if(opponentHP <= 0 && allowOpponentSelect == false) {
                defeatedOpponentCounter = defeatedOpponentCounter + 1;
                allowOpponentSelect = true;
                if (defeatedOpponentCounter == 3) {
                    alert('Congratulations! You are Victorious!');
                    displayNewGameButton();
                    

                }

                //create div with an image of the defeated opponent and place
                //it into the defeated player box

                $('#current-opponent').hide();
                var defeatedDiv = $('<div>');
                defeatedDiv.addClass('defeated-opponents');
                var defeatedImg = $('<img>');
                defeatedImg.addClass('small-image')
                defeatedImg.attr('src',opponentImage)
                defeatedDiv.append(defeatedImg);
                $('#defeated-box').append(defeatedDiv);

                if(defeatedOpponentCounter < 3){
                alert('Select your next opponent!');
            }
            }


    //Continue with opponents counter attck and health decrease of character
        if (defeatedOpponentCounter < 3) {    
        playerHP = playerHP - opponentCounterAttack;
        $('#player-health').text('Health: ' + playerHP);
        };
    //Use if statement to see if character is defeated, if so, display game over and New Game button
            if (playerHP <= 0) {
                alert('Game Over! The Force is not strong with this one.')
                displayNewGameButton();
            };

        } else {
            alert('You must select and opponent before firing.');
        }

        });

//end if here

//END MAJOR SECTION THREE: Attack Dynamics and Battle
//=================================================



    
});