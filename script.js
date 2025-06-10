var index = 0;
let currentEditIndex = null;
const recipes = [
    {
        title: 'Spaghetti Bolognese',
        ingredients: 'spaghetti, minced meat, tomato sauce, onion, garlic',
        instructions: 'Boil spaghetti, Brown minced meat, Add sauce, Mix together'
    },
    {
        title: 'Chicken Curry',
        ingredients: 'chicken, curry powder, coconut milk, onion, garlic',
        instructions: 'Brown chicken, Add onion and garlic, Stir in curry powder, Add coconut milk, Simmer'
    }
];
function displayRecipes(){
    let ingredientsArray = ingredients.value.split(",");
    var j = 1;

    let htmlIngredients = "<ul>";
    for (const item of ingredientsArray) {
        htmlIngredients += `
        <tr>
            <td> <span class= "Insta">${item}</span>&nbsp;&nbsp;</td>
        </tr>`
        j++;    
    } 

    let instructionsArray = instructions.value.split(",");
    var i = 1;
    let htmlInstructions = `<table>
    <tr>
        <th><br>Instructions:</th>
    </tr>`;
    for (const item of instructionsArray) {
        htmlInstructions += `<tr>
          <td>${i}. ${item}</td>
        </tr>`;
        i++;
    }
    htmlInstructions += "</table>";
    
    document.getElementById('recipes').innerHTML = `
    <br><h1 style = text-align:left > ${title.value}</h1>
    <hr><br>
    <h4>Ingredients:</h4><br>
    ${htmlIngredients}
    ${htmlInstructions}
    <hr>
    <br><button onclick="editRecipe()">Edit</button> 
    <button class="delete-button" onclick="deleteRecipe(index)">Delete</button>
    `;
};

const button = document.getElementById('add-recipe-form');
button.addEventListener('submit', function(event) {
    event.preventDefault();
    addRecipe(title, ingredients, ingredients);
    if (submit.textContent === 'Save Recipe') {
        console.log("Inside new button");
        deleteRecipe(index - 1);
    }
    displayRecipes();
});
function addRecipe(title, ingredients, instructions){
    var title = document.getElementById("title").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;
     if (title === "" || ingredients === "" || instructions === "") {
        alert("Please fill in all input fields.");
        return;
    }
    var newRecipe = [
        title,
        ingredients,
        instructions,
    ];
    recipes.push(newRecipe);
    console.log(recipes);
    index = recipes.length - 1;
    displayRecipes();
    
    let currentRecipe = {
        title: "",
        ingredients: [],
        instructions: []
    };        
}
function editRecipe(index){
    const recipe = recipes[index];
    var title = document.getElementById("title").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;
    submit.textContent = 'Save Recipe';
} 

function deleteRecipe(index) {
    recipes.splice(index, 1);
    console.log(recipes);
    document.getElementById('recipes').innerHTML = ``;
    //displayRecipes();
}