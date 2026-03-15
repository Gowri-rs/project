function getBotResponse(message) {

  const text = message.toLowerCase();

  if (text.includes("stress") || text.includes("stressed")) {
    return "It sounds like you're feeling stressed. Try taking a short break or practicing deep breathing.";
  }

  if (text.includes("sad") || text.includes("depressed")) {
    return "I'm sorry you're feeling this way. Talking to someone you trust can really help.";
  }

  if (text.includes("anxious") || text.includes("anxiety")) {
    return "Anxiety can feel overwhelming. Try grounding yourself by focusing on slow breathing.";
  }

  if (text.includes("lonely")) {
    return "You're not alone. Many people feel lonely sometimes. Reaching out to a friend or family member might help.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! I'm here to support your mental wellness. How are you feeling today?";
  }

  return "I'm here to listen. Tell me more about what you're feeling.";
}

module.exports = getBotResponse;