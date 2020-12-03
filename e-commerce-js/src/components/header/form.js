const Form = () => {
    const div = document.createElement("div");

    div.className = 'header__form';
    div.innerHTML = `
    <ul class ="search__list">
    <h3> All categories</h3>
    <li class ="search__item"></li>
    <li class ="search__item"></li>
    <li class ="search__item"></li>
    </ul>
    `
    return div.outerHTML;
  };
  export default Form();