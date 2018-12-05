// APPROACH
//  - create a general object which holds scrabble logic
//  - create an object containing letterScore (structure = LETTER : SCORE)
//  - create score method:
//      convert input word into upper/ lowerCase (to match the data)
//  - LOOP: isolate each letter of the word
//     For each letter, give us the value (i.e. if we get A, give us 1)
//     Once we get the value, we want to add it to our running score

const scrabble = {

    letterScore: {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: "BCMP".split(''),   // can use split('') to turn a string into an array of characters
      4: "FHVWY".split(''),
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    },
  
    //to calculate score using letterscore object
    score: function(word){
      word = word.toUpperCase();
      let sum = 0;
  
       // need to isolate each letter of the word
      for( let i = 0; i < word.length; i++ ){
        let letter = word[i]
        console.log("letter : " + letter);
        //checking to see what the key (score) is for that letter
        for( let letterValue in this.letterScore ){
          console.log("letterValue : "+ letterValue)
          if( this.letterScore[letterValue].includes(letter)){
  
            sum += parseInt(letterValue)
            console.log(`letter: ${letter} is worth ${letterValue}`)
          }// if
        }// for..in
      }// for loop
      console.log(sum)
    },
  
    letterScoresAlt: {
     'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
     'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
     's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
     'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
     'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
     'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
     'q' : 10, 'z' : 10
   },
  
   //to calculate word value using the letterScoreAlt object
   scoreAlt: function(word){
     word = word.toLowerCase();
     let sum = 0;
  
    //loop through the word to find the value of each letter (the letter is the KEY and the score is the VALUE)
     for( let i = 0; i < word.length; i++ ){
       let letter = word[i];
       let letterscore = this.letterScoresAlt[letter]
       // console.log(letterscore)
       sum += letterscore
       console.log(`letter: ${letter} is worth ${letterscore}`);
     }// for
     console.log(sum)
     return sum
   },
  } // scrabble
  
  scrabble.score('cabbage') // => output: 14
//   scrabble.scoreAlt('cabbage') // => output: 14