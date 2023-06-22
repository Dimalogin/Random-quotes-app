import { rusQuotes } from "../rus-quotes/quotes";

function getRusQuotes(): Array<{
  text: string;
  author: string;
}> {
  return rusQuotes;
}

export default getRusQuotes;
