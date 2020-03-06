let words = [
  'програма',
  'макака',
  'прекрасний',
  'блін',
  'слово',
  'автомобіль',
  'трактор',
  'папір',
  'телефон',
];


//get random word
let randomWord = Math.floor(Math.random() * words.length);

let word = words[randomWord];

let answerArray = [];

for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let attempts = 0;

//main game loop

while(remainingLetters > 0 && attempts < word.length+3 ){
    alert(answerArray.join(" "));

    let guess = prompt('Вгадай букву або натисни Відміна для виходу з гри');
    
    
    if(guess === null){
        break;
    }else if(guess.length !== 1){
        alert('Введіть тільки ОДНУ букву!');
    } else{
        //update game state
        guess.toLowerCase();
       
        for(let j = 0; j < word.length; j++){
           
            if(word[j] === guess && answerArray[j] != guess){ // перевірка чи буква зі слова тій букві що ми ввели і чи такої букву не ввели ще раз
               
                    answerArray[j] = guess;
                    remainingLetters--;
                attempts++;
         }
        }
    }

}
//show answer
alert(answerArray.join(""));
alert("Чудово! Ви вгадали слово " + word);