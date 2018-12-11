// Crystal Guess JS and jQuery

$( document).ready(function() {

//---------------------------------------------------------------------------//

//create youWin and youLose variables
    var youWin = false;
    var youLose = false;

//create variables to hold directions & scoreboard items
    var youLoseText 
    var youWinText

//create music variables
    var themeMusic
    var winMusic
    var loseMusic

//create scoreboard variables
    var targetNumber = ""; 
    var wins = 0;
    var losses = 0;
    var counter = 0;

//create crystal numbers variable
    var crystal1Num
    var crystal2Num
    var crystal3Num


//---------------------------------------------------------------------------//

//on button click, instructions slide up
$("#btn").click(function() {
    $(".instructions").slideToggle();
});

//start game
    //get target number
        getTargetNumber();
    //get crystal numbers
        getCrystalNumbers();

//display target number
    $("#target-number").text("Target Number: " + targetNumber);

//display scoreboard
    $("#current-total").text("Current Total: " + counter);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

//generate target number
    function getTargetNumber() {
        targetNumber = Math.floor(Math.random() * (190-19)) + 19; 
    }
   
//generate crystal numbers
    function getCrystalNumbers() {
        crystal1Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal2Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal3Num = Math.floor(Math.random() * (12-1)) + 1;  
        }

//reset game
    var reset
    function gameReset() {
        //get new numbers
        getTargetNumber();
        getCrystalNumbers();
        //reset counter
        counter = 0;
}
    
//on click crystal numbers add to current number
    $("#crystal1, #crystal2, #crystal3").click(function() {
        if (youWin || youLose) {
            $("#crystal1").off("click");
            //still need to enter reset function to restart game
        }

        else {
            counter = targetNumber; //easy win
            //counter = counter + crystal1Num;
            $("#current-total").text("Current Total: " + counter);
        };
    });
        
    //on any crystal click, check for wins or losses & execute win/loss functions
        $("#crystal1, #crystal2, #crystal3").click(function() {

                if (counter === targetNumber) {
                    youWin = true;
                    wins++;
                    $("#wins").text("Wins: " + wins);
                    $("#youWin").text("You've won!  You're awesome!");
                };

                if (counter > targetNumber) {
                    youLose = true;
                    losses++;
                    $("#losses").text("Losses: " + losses);
                    $("#youLose").text("You've lost.  Lame.");
                };
            });

    });
      
    