let assert = require("assert");
const { errorMonitor } = require("stream");
let Phrase = require("../index");

describe("Phrase", () => {
  describe("#letters", () => {
    it("should return true if the letters from a phrase are returned", () => {
      let phrase = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(phrase.letters(), "MadamImAdam");
    });

    it("should return empty string on no match", () => {
      let noMatchPhrase = new Phrase("1234.4221");
      assert(noMatchPhrase.letters() === "");
    });
  });
  
  describe("#palindrome", () => {
    it("should return true for a plain palindrome", () => {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return false for a non-palindrome", () => {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", () => {
      let mixedcasePalindrome = new Phrase("MalaYalam");
      assert(mixedcasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", () => {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
  });
});