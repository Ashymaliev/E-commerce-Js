import Header from './components/header/index.js';
import Home from './pages/home.js';
import Nursultan from './nursultan.js';

const root = () => {
  const rootDiv = document.createElement('div');

	rootDiv.setAttribute('id', 'root');

  rootDiv.append(Header());
  rootDiv.append(Home());
  rootDiv.append(Nursultan());
	

  document.body.append(rootDiv);
  return rootDiv;
};

root()