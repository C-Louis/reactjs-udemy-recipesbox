// REACT
import React from 'react';

class Header extends React.Component {

    /**
     * Checks if the first character of pseudo is a vowel and as a result displays "de" or "d'".
     * @param pseudo
     * @returns {string}
     */
    convertPseudo = (pseudo) => {
        return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    };

    /**
     * Renders
     * @returns {XML}
     */
    render() {
        //Return jsx
        return (
            <header>
                <h1>La boîte à recettes {this.convertPseudo(this.props.pseudo)}</h1>
            </header>
        )
    }

    /**
     * Props typechecking with propTypes
     * @type {{params: *}}
     */
    static propTypes = {
        pseudo: React.PropTypes.string.isRequired
    };
}

/**
 * To export class
 */
export default Header;