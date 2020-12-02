const Nav = () => {
    const tagNav = document.createElement('nav')
    navList.innerHTML = `
    <ul>
    <li class"nav__links"><a href="">Blog</a></li>
    <li class"nav__links"><a href="">About Us</a></li>
    <li classtagNav"nav__links"><a href="">Careers</a></li>
    </ul>
    `;
    return tagNav;
};
Nav();
export default Nav;