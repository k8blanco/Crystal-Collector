// Crystal Guess JS and jQuery


//---------------------------------------------------------------------------//

//create youWin and youLose variables
    var youWin = false;
    var youLose = false;

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

$( document).ready(function() {

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
    $("#target-number").text("Target Number : " + targetNumber);

//update display function
    function updateDisplay() {
        $("#current-total").text("Current Total : " + counter);
        $("#wins").text("Wins : " + wins);
        $("#losses").text("Losses : " + losses);
    };

//display scoreboard
    updateDisplay();

//generate target number
    function getTargetNumber() {
        targetNumber = Math.floor(Math.random() * (190-19)) + 19; 
    }
   
//generate crystal numbers
    function getCrystalNumbers() {
        crystal1Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal2Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal3Num = Math.floor(Math.random() * (12-1)) + 1;  
        crystal4Num = Math.floor(Math.random() * (12-1)) + 1;
        }

//reset game
    function gameReset() {
        //new target number
        getTargetNumber();
        //new crystal numbers
        getCrystalNumbers();
        counter = 0;
        //reset display
        updateDisplay();
        //display new target number
        $("#target-number").text("Target Number: " + targetNumber);
        youWin = false;
        youLose = false;
    };
    
//on click crystal numbers add to current number
    $("#crystal1, #crystal2, #crystal3, #crystal4").click(function() {
        
            if (this.id === "crystal1") {
                counter = counter + crystal1Num;
            };

            if (this.id === "crystal2") {
                counter = counter + crystal2Num;
            };
            
            if (this.id === "crystal3") {
                counter = counter + crystal3Num;
            };

            if (this.id === "crystal4") {
                counter = counter + crystal4Num;
            };
            
            updateDisplay();
        

    });


    //on any crystal click, check for wins or losses & execute win/loss functions
        $("#crystal1, #crystal2, #crystal3, #crystal4").click(function() {

                if (counter === targetNumber) {
                    youWin = true;
                    wins++;
                    $("#youWin").text("You've won!  You're awesome!");
                    $("#youWin").fadeOut(1000 * 3);
                    gameReset();
                    return;
                };

                if (counter > targetNumber) {
                    youLose = true;
                    losses++;
                    $("#youLose").text("You've lost.  Lame.");
                    $("#youLose").fadeOut(1000 * 3);
                    gameReset();
                };
            });

    });
      
    