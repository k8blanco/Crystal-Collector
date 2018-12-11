// Crystal Guess Pseudocode





//when the player clicks on a crystal...
    //create on click event for each crystal
        //on click, add the random assigned to each crystal to the user point total
        //the amount assigned to each crystal will remain hidden, but will update the score total appropriately

        
//player wins if their total score matches the random number
//player loses if their score goes above random number
//the game restarts when the player wins or loses
//new game = new random number and new random crystal numbers
//display number of games the player wins and loses

$( document).ready(function() {
    

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



//start game
    //get target number
        getTargetNumber();
    //get crystal numbers
        getCrystalNumbers();
 

//onclick, instructions slide up
    $("#btn").click(function() {
        $(".instructions").slideToggle();
    });

//display target number
    $("#target-number").text("Target Number: " + targetNumber);

//display scoreboard
    $("#current-total").text("Current Total: " + counter);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);



    //generate random number
    function getTargetNumber() {
        targetNumber = Math.floor(Math.random() * (190-19)) + 19; 
    }
   
    //generate crystal numbers
    function getCrystalNumbers() {
        crystal1Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal2Num = Math.floor(Math.random() * (12-1)) + 1; 
        crystal3Num = Math.floor(Math.random() * (12-1)) + 1;  
        }
    
    //on click crystal numbers add to current number
        $("#crystal1").click(function() {
            counter = targetNumber; //easy win
            // counter = counter + crystal1Num;
            $("#current-total").text("Current Total: " + counter);
        })
        
        $("#crystal2").click(function() {
            counter = targetNumber + 900; //easy lose
            // counter = counter + crystal2Num;
            $("#current-total").text("Current Total: " + counter);
        });

        $("#crystal3").click(function() {
            counter = counter + crystal3Num;
            $("#current-total").text("Current Total: " + counter);
        });
    
    do {
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

    } while (
    

    });
      
    
