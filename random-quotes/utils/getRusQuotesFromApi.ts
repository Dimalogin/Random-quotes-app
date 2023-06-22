import { rusQuotes } from "../data/rus-quotes";


function getRusQuotes(): Array<{
  text: string;
  author: string;
}> {
  return rusQuotes;
}

export default getRusQuotes;
