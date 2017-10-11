// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
//Import recipes
import recettes from '../recettes';
//Import Foirebase
import base from '../base';

class App extends React.Component {

	state = {
		recettes: recettes
	};

	//As soon as the component is mounted, synchronize with firebase
	componentWillMount() {
	    this.ref = base.syncState(`${this.props.params.pseudo}/recettes`, {
	        context: this,
            state: 'recettes'
        })
    }

    //At deconnection
    componentWillUnmount() {
	    base.removeBinding(this.ref);
    }

	loadExample = () => {
		this.setState({ recettes });
	};

	render() {

		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Card key={key} details={this.state.recettes[key]} />);


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

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;