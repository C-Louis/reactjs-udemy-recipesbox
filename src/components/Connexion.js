// REACT
import React from 'react';

class Connexion extends React.Component {

    /**
     * Opens app page with pseudo from connection page.
     * @param event
     */
	goToApp = event => {
		event.preventDefault();
		// Gets the pseudo from form.
		const pseudo = this.boxInput.value;
		// Changes url to display a new page.
		this.context.router.transitionTo(`/box/${pseudo}`);
	};

    /**
     * Renders
     * @returns {XML}
     */
	render() {
		return (
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e) => this.goToApp(e)} >
					<h1>Ma Boîte à Recettes</h1>
					<input type="text" placeholder="Nom du Chef" pattern="[A-Za-z-]{1,}" required ref={(input) => {this.boxInput = input}} />
					<button type="submit">GO</button>
					<p>Pas de caractères spéciaux.</p>
				</form>
			</div>
		)
	}

    /**
	 * To handle React context, needs of contextTypes
     * @type {{router: *}}
     */
	static contextTypes = {
		router: React.PropTypes.object
	};
}

/**
 * To export class
 */
export default Connexion;