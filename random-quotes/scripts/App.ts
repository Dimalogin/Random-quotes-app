import { AppTemplate } from "../templates/AppTemplate";
import { QuotesTemplate } from "../templates/QuotesTemplate";

import getEngQuotesFromApi from "../utils/getEngQuotesFromApi";
import getRusQuotes from "../utils/getRusQuotesFromApi";
import getRandomQuotes from "../utils/getRandomQuotes";

class App {
  readonly #eventListeners = {
    handleEvent: (event: Event) => {
      switch (event.currentTarget) {
        case this.#languageSwitching:
          if (this.#languageSwitching?.value === "ru") {
            this.#currentLanguage = "ru";
          } else if (this.#languageSwitching?.value === "en") {
            this.#currentLanguage = "en";
          }
          break;
        case this.#generateQuotesBtn:
          this.#updateQuotes(this.#currentLanguage);
          break;
      }
    },
  };

  #currentLanguage: string = "en";
  #languageSwitching: HTMLSelectElement | null = null;
  #generateQuotesBtn: HTMLButtonElement | null = null;
  #joke: HTMLDivElement | null = null;

  render() {
    this.#initAppTemplate();
    this.#bindListeners();
    this.#updateQuotes(this.#currentLanguage);
  }

  #initAppTemplate() {
    const body = document.body;
    const fullViewApp = AppTemplate.content.cloneNode(true) as DocumentFragment;

    this.#languageSwitching = fullViewApp.querySelector(".jokes-select");
    this.#generateQuotesBtn = fullViewApp.querySelector(".btn__generate");
    this.#joke = fullViewApp.querySelector(".joke");

    body.innerHTML = "";
    body.appendChild(fullViewApp);
  }

  #updateQuotes(lang: string): void {
    if (lang === "en") {
      this.#onGetEngQuote();
    }

    if (lang === "ru") {
      this.#onGetRusQuote();
    }
  }

  #onGetEngQuote(): void {
    this.#showLoader();
    this.#joke!.innerHTML = "";
    this.#generateQuotesBtn!.disabled = true;

    getEngQuotesFromApi()
      .then((data) => {
        setTimeout(() => {
          this.#hideLoader();
          const quote = getRandomQuotes(data);
          this.#renderQuotes(quote);
          this.#generateQuotesBtn!.disabled = false;
        }, 500);
      })
      .catch((error) => {
        alert(error);
      });
  }

  #onGetRusQuote(): void {
    this.#showLoader();
    this.#joke!.innerHTML = "";
    this.#generateQuotesBtn!.disabled = true;

    setTimeout(() => {
      this.#hideLoader();
      const data = getRusQuotes();
      const quote = getRandomQuotes(data);
      this.#renderQuotes(quote);
      this.#generateQuotesBtn!.disabled = false;
    }, 500);
  }

  #renderQuotes(quote: { text: string; author: string }): void {
    const quotesView = QuotesTemplate.content.cloneNode(
      true
    ) as DocumentFragment;

    const text: HTMLDivElement | null =
      quotesView.querySelector(".joke__text")!;
    const author: HTMLDivElement | null =
      quotesView.querySelector(".author__text")!;

    text.innerHTML = `&#8220; ${quote.text} &#8221;`;
    author.innerHTML = quote.author ? quote.author : `Unknown`;

    this.#joke!.innerHTML = "";
    this.#joke!.appendChild(quotesView);
  }

  #bindListeners(): void {
    this.#languageSwitching?.addEventListener("change", this.#eventListeners);
    this.#generateQuotesBtn?.addEventListener("click", this.#eventListeners);
  }

  #showLoader(): void {
    const loader: HTMLDivElement | null =
      document.querySelector(".joke-loader")!;

    loader.style.display = "block";
  }

  #hideLoader(): void {
    const loader: HTMLDivElement | null =
      document.querySelector(".joke-loader")!;
    loader.style.display = "none";
  }
}

export default App;
