const img = () => {
    const img = document.createElement('img')
    img.src = './images/logo.svg';
    return img.outerHTML
};

  export default img();