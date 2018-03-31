          //array with all the letters in the alphabet
          var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

          // place holders for number of wins, losses, guesses, and chosen letters so far
          var win = 0;
          var loss = 0;
          var guess = 5;
          var letters = [];
          
          // the rndom selection of a letter from the computer is made
          var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
          
          // then user picks something and we capture the keys pressed by the user
          document.onkeypress = function(event) {
          //assign the key selected to a new variable
          var letterSelect = event.key;
          
          // determines the wins and losses of the user guesses and changes the count of them; decreases guesses remaining
          if ((letterSelect === computerGuess )) {
              win++;
              } 
          else if ((letterSelect ==! computerGuess)) {
              guess--; 
              } 
          else if ((letterSelect ==! computerGuess))+ ((guess < 0)); {
              loss++
              };
          
          //Generating the score of the game back to the screen        
          var score =
                "<p>Rounds Won: " + win + "</p>" +
                "<p>Rounds Lost: " + loss + "</p>" +
                "<p>Guess Remaining This Round: " + guess + "</p>" +
                "<p>Letters Guessed So Far: " + letters + "</p>";
          
          //displays the score to the screen
          document.write(score);}      //array with all the letters in the alphabet
          var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    // place holders for number of wins, losses, guesses, and chosen letters so far
    var win = 0;
    var loss = 0;
    var guess = 5;
    var letters = [];
    
    // the rndom selection of a letter from the computer is made
    var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // then user picks something and we capture the keys pressed by the user
    document.onkeypress = function(event) {
    //assign the key selected to a new variable
    var letterSelect = event.key;
    
    // determines the wins and losses of the user guesses and changes the count of them; decreases guesses remaining
    if ((letterSelect === computerGuess )) {
        win++;
        } 
    else if ((letterSelect ==! computerGuess)) {
        guess--; 
        } 
    else if ((letterSelect ==! computerGuess))+ ((guess < 0)); {
        loss++
        };
    
    //Generating the score of the game back to the screen        
    var score =
          "<p>Rounds Won: " + win + "</p>" +
          "<p>Rounds Lost: " + loss + "</p>" +
          "<p>Guess Remaining This Round: " + guess + "</p>" +
          "<p>Letters Guessed So Far: " + letterSelect + "</p>";
    
    //displays the score to the screen
    document.write(score);
};