const Nav = () => {
    const tagNav = document.createElement('nav')
    tagNav.innerHTML = `
    <ul class="nav__link">
    <li class="nav__links"><a href="">Blog</a></li>
    <li class="nav__links"><a href="">About Us</a></li>
    <li class="nav__links"><a href="">Careers</a></li>
    </ul>
    `;
    return tagNav.outerHTML
};
export default Nav();