 
const Logo = () => {
  const tagLogo = document.createElement('div');
  tagLogo.innerHTML = `
	<a href="index.html">
  <img src="./images/logo.svg" alt="">
	</a>
	`;
  return tagLogo.outerHTML;
};

export default Logo();