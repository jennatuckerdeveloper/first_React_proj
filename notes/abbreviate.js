/*
Abbreviate!

The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")

Output:

"e6t-r3s are r4y fun!"
*/

const abbreviate = function (str) {
  let separate = str.split(/[\s-]/)
  let noPunc = []
  let newString = []
  for (let word of separate) {
    let lenWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    noPunc.push(lenWord)
    let innerNum = lenWord.length - 2
    if (innerNum > 1) {
      let coded = word[0] + innerNum.toString() + word[lenWord.length - 1]
      newString.push(coded)
    } else {
      newString.push(word)
    }
  } console.log(newString.join(' '))
}

abbreviate('elephant-rides are really fun!')
abbreviate('accessibility')
abbreviate('internationalization')
