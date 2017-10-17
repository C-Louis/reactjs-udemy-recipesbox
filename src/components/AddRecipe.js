// REACT
import React from 'react';

class AddRecipe extends React.Component {

    /**
     *
     * @param event
     */
    createRecipe = event => {
        // Avoids reloading page on submit.
        event.preventDefault();
        // Create new recipe object from form inputs values.
        const recipe = {
            name: this.name.value,
            image: this.image.value,
            ingredients: this.ingredients.value,
            instructions: this.instructions.value
        }
        // Add recipe in state (with props).
        this.props.addRecipe(recipe);
        // Resets form (empties fields) after submit.
        this.recipeForm.reset();
    };

    /**
     * Renders
     * @returns {XML}
     */
    render() {
        // Returns jsx
        return (
            <div className="card">
                <form
                    className="admin-form ajouter-recette"
                    ref={input => this.recipeForm = input}
                    onSubmit={(e) => this.createRecipe(e)} >
                    <input
                        ref={input => this.name = input}
                        type="text" placeholder="Nom de la recette" />
                    <input
                        ref={input => this.image = input}
                        type="text" placeholder="Adresse de l'image" />
                    <textarea
                        ref={input => this.ingredients = input}
                        rows="3" placeholder="Liste des ingrédients séparés par une virgule"></textarea>
                    <textarea
                        ref={input => this.instructions = input}
                        rows="3" placeholder="Liste des instructions (une par ligne)"></textarea>
                    <button type="submit">+ Ajouter une recette</button>
                </form>
            </div>
        )
    }

    /**
     * Props typechecking with propTypes
     * @type {{params: *}}
     */
    static propTypes = {
        addRecipe: React.PropTypes.func.isRequired
    };
}

/**
 * To export component
 */
export default AddRecipe;