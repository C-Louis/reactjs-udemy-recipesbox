//REACT
import React from 'react';

class Admin extends React.Component {

    render() {
        //Returns jsx
        return (
            <div className="cards">
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
        loadExample: React.PropTypes.func.isRequired
    };
}

/**
 * To export class
 */
export default Admin;