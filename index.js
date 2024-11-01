const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// this function takes in a string and returns the same string with the first characters capitalized
const capitalizeAllWords = string => {
  string = string[0].toUpperCase() + string.slice(1);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let letter of alphabet) {
    string = string.replaceAll(' ' + letter, ' ' + letter.toUpperCase());
  }
  return string;
}

// function to pass npm test
const titleCased = () => {
  return tutorials.map(capitalizeAllWords);
}
