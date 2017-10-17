// React
import React from 'react';
import { render } from 'react-dom';
// Components
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';
// CSS
import './index.css';

/**
 * Sets routes from right component according to url
 * @returns {XML}
 * @constructor
 */
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion} />
				<Match pattern="/box/:pseudo" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
};

/**
 * Renders
 */
render(
  <Root />,
  document.getElementById('root')
);
