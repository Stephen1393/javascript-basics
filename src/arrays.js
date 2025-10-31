const getNthElement = (index, array) => {
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString(',');
};

const csvStringToArray = string => {
 return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array,element];
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.join(',').toUpperCase().split(',');
};

const reverseWordsInArray = strings => {
  return strings.map(function (word) { return word.split('').reverse().join(''); });

  };


const onlyEven = numbers => {
  return numbers.filter(function (num){
    return num % 2 === 0
  }
)};

const removeNthElement2 = (index, array) => {
  return array.toSpliced(index, 1);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return strings.filter (function(letter){
    return vowels.includes(letter[0]);
  }
)};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
