import React from 'react';

class Admin extends React.Component {

    render() {
        //Return jsx
        return (
            <div className="cards">
                <footer>
                    <button onClick={this.props.loadExample}>Remplir</button>
                </footer>
            </div>
        )
    }

    static propTypes = {
        loadExample: React.PropTypes.func.isRequired
    };
}

export default Admin;