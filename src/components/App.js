// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
//Import recipes
import recettes from '../recettes';

class App extends React.Component {

	state = {
		recettes: recettes
	};

	loadExample = () => {
		this.setState({ recettes });
	};

	render() {
		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					<div className="card"></div>
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