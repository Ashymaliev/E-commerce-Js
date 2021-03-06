const Icon = () => {
    const tagDiv = document.createElement("div")
    tagDiv.className = "system__icon"
    tagDiv.innerHTML = `     
       <div class="system__item">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 21.9999L2.79 19.1199C5.4 9.6199 16.6 9.6199 19.21 19.1199L20 21.9999"
            stroke="#151515"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 11.98C13.7614 11.98 16 9.74141 16 6.97998C16 4.21856 13.7614 1.97998 11 1.97998C8.23858 1.97998 6 4.21856 6 6.97998C6 9.74141 8.23858 11.98 11 11.98Z"
            stroke="#151515"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          />
        </svg>
        </div>
        
        <div class="system__item">
        <span class="system__number">4</span>
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8896 19.8499H6.10955C5.79187 19.8501 5.48326 19.7439 5.23309 19.5481C4.98291 19.3523 4.80562 19.0783 4.72955 18.7699L2.07955 8.15986C2.05369 8.05657 2.05174 7.94874 2.07383 7.84458C2.09593 7.74042 2.1415 7.64267 2.20707 7.55878C2.27264 7.47489 2.35649 7.40706 2.45223 7.36046C2.54797 7.31386 2.65307 7.28971 2.75955 7.28986H21.2396C21.346 7.28971 21.4511 7.31386 21.5469 7.36046C21.6426 7.40706 21.7265 7.47489 21.792 7.55878C21.8576 7.64267 21.9032 7.74042 21.9253 7.84458C21.9474 7.94874 21.9454 8.05657 21.9196 8.15986L19.2696 18.7699C19.1935 19.0783 19.0162 19.3523 18.766 19.5481C18.5158 19.7439 18.2072 19.8501 17.8896 19.8499V19.8499Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.79941 2.14993L6.89941 7.28993" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.8799 2.14993L16.7899 7.28993" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
         `;
      return tagDiv.outerHTML; 
};
export default Icon();