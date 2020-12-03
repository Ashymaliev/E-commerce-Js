import Contact from './contact.js';
import Nav from './nav.js';
import img from './logo.js';
import Form from './form.js';
import Icon from './icon.js';
import searchBar from './searchBar.js';
const Header = () => {
    const tagHeader = document.createElement('header');
    tagHeader.innerHTML = `
    <div class="container">
    <div class="header__top">
    ${Contact}
    ${Nav}
    </div>
    <div class="header__line"></div>
    <div class="header__middle">
    ${img}
    ${Form}
    ${Icon}
    </div>
    <div class="header__bottom">
    ${searchBar}
    </div>
    </div>
    `;
    document.body.appendChild(tagHeader);
    return tagHeader;
};
Header();