//REACT
import React from 'react';
// Components
import AddRecipe from './AddRecipe';

class Admin extends React.Component {

    render() {
        //Returns jsx
        return (
            <div className="cards">
                <AddRecipe addRecipe={this.props.addRecipe} />
                <footer>
                    <button onClick={this.props.loadExample}>Remplir</button>
                </footer>
            </div>
        )
    }

    /**
     * Props typechecking with propTypes
     * @type {{params: *}}
     */
    static propTypes = {
        loadExample: React.PropTypes.func.isRequired,
        addRecipe: React.PropTypes.func.isRequired
    };
}

/**
 * To export component
 */
export default Admin;