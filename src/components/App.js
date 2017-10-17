// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
//Import recipes
import recettes from '../recettes';
//Import Firebase
import base from '../base';

class App extends React.Component {

    /**
     * Creates a new state
      */
	state = {
		recettes: recettes
	};

    /**
	 * As soon as the component is mounted, synchronize with Firebase.
     */
	componentWillMount() {
	    this.ref = base.syncState(`${this.props.params.pseudo}/recettes`, {
	        context: this,
            state: 'recettes'
        })
    }

    /**
	 * At deconnection (=unmount),removes all binding : Allows to desynchronize with Firebase.
     */
    componentWillUnmount() {
	    base.removeBinding(this.ref);
    }

    /**
	 * Loads all recipes in state
     */
	loadExample = () => {
		this.setState({ recettes });
	};

    /**
	 * Renders
     * @returns {XML}
     */
	render() {
		//
		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Card key={key} details={this.state.recettes[key]} />);

		// Returns JSX
		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{cards}
				</div>
				<Admin loadExample={this.loadExample} />
			</div>
		)
	}

    /**
	 * Props typechecking with propTypes
     * @type {{params: *}}
     */
	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

/**
 * To export class
 */
export default App;