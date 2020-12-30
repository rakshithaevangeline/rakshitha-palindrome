module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;


  // Returns only the letters from a phrase that contains punctuation
  this.letters = function letters() {
    // return  Array.from(this.content).filter(character => character.match(/[a-zA-Z]/)).join("");

    // Refactor with just match()
    if (this.content.match(/[a-z]/ig)) {
      return this.content.match(/[a-z]/ig).join("");
    } else {
      return [].join("");
    }
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
   }

  // Returns true if the phrase is a palindrome , false otherwise.
  this.palindrome = function palindrome() {
   return this.processedContent() === this.processedContent().reverse();
  };

  
}