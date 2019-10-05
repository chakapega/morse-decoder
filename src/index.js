const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  const arrayOfWordsEncryptedInNumbers = expr.split('**********');
  const arrayOfWordsEncryptedInMorse = [];
  let decryptedString = '';

  arrayOfWordsEncryptedInNumbers.forEach(word => {
    let morseCodeWord = '';
    let encryptedCharacterCounter = 0;

    for (let i = 0; i < word.length; i += 2) {
      encryptedCharacterCounter++;

      if (word[i] + word[i + 1] === '10') {
        morseCodeWord += '.';
      };

      if (word[i] + word[i + 1] === '11') {
        morseCodeWord += '-';
      };
      
      if (encryptedCharacterCounter % 5 === 0 && encryptedCharacterCounter !== word.length / 2) {
        morseCodeWord += '|';
      };
    };

    arrayOfWordsEncryptedInMorse.push(morseCodeWord.split('|'));
  });

  for (let i = 0; i < arrayOfWordsEncryptedInMorse.length; i++) {
    arrayOfWordsEncryptedInMorse[i].forEach(letter => {
      decryptedString += MORSE_TABLE[letter];
    });

    if (i + 1 < arrayOfWordsEncryptedInMorse.length) {
      decryptedString += ' ';
    };
  };

  return decryptedString;
};

module.exports = {
    decode
};