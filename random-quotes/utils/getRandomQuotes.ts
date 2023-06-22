function getRandomQuotes(quotes: Array<{ text: string; author: string }>): {
  text: string;
  author: string;
} {
  const lengthQuotes = quotes.length;
  const randomNumber = Math.floor(Math.random() * lengthQuotes);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}

export default getRandomQuotes;
