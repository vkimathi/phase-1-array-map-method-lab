const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const specialCases = {
    'OO': 'OO',
    'API': 'API',
    'NaN': 'NaN',
    'JSONP': 'JSONP',
    'StopPropagation': 'StopPropagation',
    'PreventDefault': 'PreventDefault',
    'Constructor': 'Constructor'
  };

  return tutorials.map(function(tutorial) {
    return tutorial.split(' ').map(function(word) {
      const lowerWord = word.toLowerCase();
      const specialEntry = Object.entries(specialCases).find(
        ([key, val]) => key.toLowerCase() === lowerWord
      );
      
      if (specialEntry) {
        return specialEntry[1];
      }
      
      const wordWithoutPunct = word.replace(/[^a-zA-Z]/g, '');
      const punctSpecialEntry = Object.entries(specialCases).find(
        ([key, val]) => key.toLowerCase() === wordWithoutPunct.toLowerCase()
      );
      
      if (punctSpecialEntry) {
        return punctSpecialEntry[1] + word.slice(wordWithoutPunct.length);
      }
      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}

console.log(titleCased());

