const crisisKeywords = [
  "suicide",
  "kill myself",
  "end my life",
  "die",
  "hopeless",
  "depressed",
  "unalive"
];

function detectCrisis(message) {

  const text = message.toLowerCase();

  for (let word of crisisKeywords) {
    if (text.includes(word)) {
      return true;
    }
  }

  return false;
}

module.exports = detectCrisis;