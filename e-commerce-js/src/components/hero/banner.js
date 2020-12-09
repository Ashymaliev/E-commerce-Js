const Banner = () => {
    const div = document.createElement('div');
    const h6 = document.createElement('h6');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const imgWrapper = div.cloneNode();

    div.className = 'col-6 banner'
    h6.className = 'banner__subtitle';
    a.className = 'banner__link';
    img.className = 'banner__image';

    img.src
    
    h6.innerText = 'RECIPES'
    h3.innerText = 'Tomato foccacia'
    a.innerText = 'Read recepies'
    
    return 

}

export default Banner