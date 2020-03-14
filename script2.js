function pickWord(){
    let words = [
        'рама',
        'коло',
        'краса',
        'блін'
      ];
    
    let randomWord = Math.floor(Math.random() * words.length);  

    let word = words[randomWord];
    return word;
}


function setupAnswerArray(word){
    let answerArray = [];
    for(let i = 0; i < word.length; i++){
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(answerArray){
    alert(answerArray.join(" "));
}


function updateGameState(guess, word, answerArray){
    let appearances = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] == guess){
           answerArray[i] = guess;
           appearances++;
        }
    }
    return appearances;
}

function getGuess(){
    let guess = prompt('Вгадай букву або натисни Відміна для виходу з гри');
    return guess;
}

function showAnswerAndCongratulatePlayer(answerArray){
    showPlayerProgress(answerArray);
    alert("Чудово! Ви вгадали слово " + answerArray.join(""));
}

let word = pickWord();

let remainingLetters = word.length;

let answerArray = setupAnswerArray(word);


   while(remainingLetters > 0 ){  
       showPlayerProgress(answerArray);
       let guess = getGuess();
       console.log(guess);
    if(guess === null){
        break;
    } else{
        let correctGuess = updateGameState(guess, word, answerArray);
        console.log(correctGuess);
        remainingLetters -= correctGuess;
    }
}

showAnswerAndCongratulatePlayer(answerArray);