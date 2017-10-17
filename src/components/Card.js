// REACT
import React from 'react';

class Card extends React.Component {

    /**
     * Renders
     * @returns {XML}
     */
    render() {

        // Gets all ingredients from props.details and map them in a new array
        const ingredients = this.props.details.ingredients
                        .split(',')
                        .map((item, key) => <li key={key} >{item}</li>);

        // Gets all instructions from props.details and map them in a new array
        const instructions = this.props.details.instructions
            .split('\n')
            .map((item, key) => <li key={key} >{item}</li>);

        //Return jsx
        return (
            <div className="card">
                <div className="image">
                    <img src={this.props.details.image} alt={this.props.details.nom} />
                </div>
                <div className="recette">
                    <h2>{this.props.details.nom}</h2>
                    <ul className="liste-ingredients">
                        {ingredients}
                    </ul>
                    <ol className="liste-instructions">
                        {instructions}
                    </ol>
                </div>
            </div>
        )
    }

    /**
     * Props typechecking with propTypes
     * @type {{params: *}}
     */
    static propTypes = {
        details: React.PropTypes.object.isRequired
    };
}

/**
 * To export component
 */
export default Card;