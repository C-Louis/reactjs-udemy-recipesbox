// Rebase (for Firebase)
import Rebase from 're-base';

/**
 * Creates new Rebase class with perso auth.
 */
const base = Rebase.createClass({
    apiKey: "AIzaSyAbxqLfArIFgBFKmXIiYgCs2YJAqPjXQ74",
    authDomain: "reactjs-recipesbox.firebaseapp.com",
    databaseURL: "https://reactjs-recipesbox.firebaseio.com",
});

/**
 * To export class
 */
export default base;