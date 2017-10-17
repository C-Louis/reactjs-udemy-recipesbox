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
		recipes: recettes
	};

    /**
	 * As soon as the component is mounted, synchronize with Firebase.
     */
	componentWillMount() {
	    this.ref = base.syncState(`${this.props.params.pseudo}/recettes`, {
	        context: this,
            state: 'recipes'
        })
    }

    /**
	 * At deconnection (=unmount),removes all binding : Allows to desynchronize with Firebase.
     */
    componentWillUnmount() {
	    base.removeBinding(this.ref);
    }

    /**
	 * Loads all recipes from Firebase .in state
     */
	loadExample = () => {
		this.setState({ recettes });
	};

    /**
     * Adds a new recipe in state.
     * @param recipe
     */
	addRecipe = (recipe) => {
	    // Make a copy of state.
	    const recipes = {...this.state.recipes};
	    // Creates unique key with timestamp.
        const timestamp = Date.now();
        // Adds an entry in the copy of state.
        recipes[ `recipe-${timestamp}`] = recipe;
        // Updates state.
        this.setState({ recipes });
    }

    /**
	 * Renders
     * @returns {XML}
     */
	render() {
		//
		const cards = Object
			.keys(this.state.recipes)
			.map(key => <Card key={key} details={this.state.recipes[key]} />);

		// Returns JSX
		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{cards}
				</div>
				<Admin
                    loadExample={this.loadExample}
                    addRecipe={this.addRecipe}
                />
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
 * To export component
 */
export default App;