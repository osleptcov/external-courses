function Hangman(world){
	var errorsCount =6;
    var wordByLetters= world.toLowerCase().split('');
	var guessedString=wordByLetters.map(function() {
        return '_';
    });
    var wrongLetters = [];
	
	return {
    guess :function(letter) {
        var lt = letter.toLowerCase();
				var curenrtState = 0;

        if(errorsCount !== 0){
            if(wordByLetters.indexOf(lt, curenrtState) === -1){
                errorsCount--;
                wrongLetters.push(lt);
    
                console.log('wrong letter, errors left ' + errorsCount + ' | ' + wrongLetters.join(','));
            } 
				else {
					while(wordByLetters.indexOf(lt, curenrtState) !== -1){
						guessedString[wordByLetters.indexOf(lt, curenrtState)] = lt;
						curenrtState = wordByLetters.indexOf(lt, curenrtState) + 1;
					}
					
					if(guessedString.indexOf('_') !== -1){
						console.log(guessedString.join(''));
					} else {
						console.log(guessedString.join('') + ' | Congratulations! You won!');
					}
				}
        } else {
            console.log('Sorry, but you lost');
        }
        
        return this;
    },

    getGuessedString: function() {
        console.log( guessedString.join('') );
    },

    getErrorsLeft : function() {
        console.log( errorsCount );
    },

    getWrongSymbols : function(){
        console.log( wrongLetters );
    },

   startAgain : function(world){
        wordByLetters = world.split('');

        guessedString = wordByLetters.map(function(a) {
            return '_';
        });
    
        wrongLetters = [];

        return this;
    },

    getStatus : function(){
        console.log(guessedString.join('') + ' | errors left ' + errorsCount);
        return this;
    }
	}
}

var hangman = new Hangman('webpurple');
hangman.guess('w');