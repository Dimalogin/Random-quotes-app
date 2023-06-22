export const QuotesTemplate = document.createElement("template");

QuotesTemplate.innerHTML = `
        <div class = 'joke__body'>
            <div class = 'joke__text'></div>
            <div class = 'joke-author'>
              <span class = "author__title">author:</span>
              <span class = "author__text"></span>
            </div>
        </div>`;
