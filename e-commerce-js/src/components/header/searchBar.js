const searchBar = () => {
  const div = document.createElement('div');

  div.className = 'header__search-bar search-bar';

  div.innerHTML = `
	<ul class="search-bar__list">
		<h3 class="search-bar__title">
			All categories
			<img src="./images/icon-arrow.svg" alt="icon-arrow">
		</h3>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
	</ul>
	<label>
		<input class="search-bar__input" type="text" placeholder="Search Products, categories ..."/>
	</label>
	<button class="search-bar__btn">
  <img src="./images/icon-search.svg" alt="icon-search">
	</button>
	`;

  return div.outerHTML;
};

export default searchBar();