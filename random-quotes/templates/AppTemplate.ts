export const AppTemplate = document.createElement("template");

AppTemplate.innerHTML = ` <div class="wrapper">
<header class="header">
  <div class="container">
    <div class="header__body">
      <div class="header__row">
        <div class="header__title">Random Quotes</div>
        <div class="header__switch switch-jokes">
          <select class="jokes-select">
            <option value = 'en'>quotes in english</option>
            <option value = 'ru'>quotes in russian</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  </header>
  <main class="main">
  <div class="container">
    <div class="main__body">
        <div class="jokes">
            <div class="jokes__body">
                <div class="jokes__row">
                  <div class="jokes-joke">
                    <div class = 'joke-loader'></div>
                    <div class = 'joke'></div>
                  </div>
                <div class="jokes-btn">
                 <button class="btn__generate">generate quote</button>
            </div>
            </div>
        </div>
     </div>
  </div>
</div>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__row">
          <div class="footer-github">
            <a href = 'https://github.com/Dimalogin/' target='_blank' class = 'github-link'>Github</a>
          </div>
          <div class="footer-year">2023</div>
          <div class="footer-logo">
            <a href="https://rs.school/js-stage0/" target='_blank' class = logo__link>
            <img src='./images/logoRss.svg' class = 'logo__icon'>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
</div>`;
