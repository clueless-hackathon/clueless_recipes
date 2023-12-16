// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, get, set, ref, child, onValue } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO5wtOZ-iMepXjlAaJtd57mn8KlXcEbjk",
  authDomain: "clueless-recipes.firebaseapp.com",
  databaseURL: "https://clueless-recipes-default-rtdb.firebaseio.com",
  projectId: "clueless-recipes",
  storageBucket: "clueless-recipes.appspot.com",
  messagingSenderId: "464626059255",
  appId: "1:464626059255:web:917a22b6187227fe9f50f2",
  measurementId: "G-V9WMZ99G7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("logged in!");
    } else {
        console.log("No user");
    }
});


var recipesLoaded = 0;
const testRecipe = {
    title: "Grilled Cheese",
    recipeSteps: [
        "Grease the pan and set it to medium heat",
        "Butter both slices of toast on one side",
        "put 1 or 2 slices of cheese on the toast with the side that is not buttered",
        "put the other slice of toast on top of the cheese with the buttered side facing up",
        "put the sandwich on the pan and cook each side for 2 minutes, or until both sides are golden brown",
        "Enjoy! :)"
    ],
    author: "Tristan Desoto",
    ingredients: [
        {
            name: "Cheese",
            amountUnit: "slices",
            amount: 2
        },
        {
            name: "toast",
            amountUnit: "slices",
            amount: 2
        },
        {
            name: "butter",
            amountunit: "tablespoons",
            amount: 1
        }
    ],
    dietaryRestrictions: [
        false,
        false,
        true,
        true,
        true
    ],
    description: "Here is my homemade Grilled Cheese recipe! This has been my favorite as a kid. Hope you enjoy!",
    rating: 5
}

class Recipe{
    constructor(title, author, ingredients, recipeSteps, description, dietaryRestrictions){
        this.title = title;
        this.author = author;
        this.ingredients = ingredients;
        this.recipeSteps = recipeSteps;
        this.description = description;
        this.dietaryRestrictions = dietaryRestrictions;
        this.rating = 0;
        this.image = null;
    }


}

function displayRecipesMainPage(recipe){
    const div = document.createElement('div');
    const text = document.createTextNode(recipe);
    div.appendChild(text);
    document.getElementById('RecipeContainer').appendChild(div);
}

function writeRecipe(recipe){
    set(ref(database, 'recipes/' + uuidv7()), recipe);
}

console.log(testRecipe);

onValue(ref(database, 'recipes/'), (snapshot) => {
    displayRecipesMainPage(Object.values(snapshot));
});