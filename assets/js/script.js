// Define all DOM elements here
const getRecipeBtn = document.querySelector('.get-recipes')
const recipeResults = document.querySelector('.recipe-results')
const recipeNumber = document.querySelector('#recipe-number')
const myIngCheck = document.querySelector('.myIngCheck')

//API INFO HERE
const APIKEY = '5f7f6407a3df426fb065f2211ab36e41'


getRecipeBtn.addEventListener('click', getRecipe)

function getRecipe() {

    if (myIngCheck.checked){
        var myIngRank = "&ranking=2"
    }
    else {var myIngRank = ""}
    console.log(myIngRank)

    var ingredients = document.querySelector('.ing1').innerText + "," + document.querySelector('.ing2').innerText + "," + document.querySelector('.ing3').innerText + ","  + document.querySelector('.ing4').innerText + ","
    console.log(ingredients)
    var recipeURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`
    + ingredients 
    + myIngRank
    + `&number=`
    + recipeNumber.value
    + `&ignorePantry&apiKey=`
    + APIKEY; 

    console.log(recipeURL)
    fetch(recipeURL)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => generateRecipe(data))
}

function generateRecipe(data){
    let generatedRecipe = '';
    data.map(result => {
        generatedRecipe += 
        `
        <div class="col s6 m4 xl3">
        <div class="recipe-card card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="img activator" src="${result.image}" alt="A picture of generated recipe">
          </div>
          <div class="card-content">
            <span class="recipe-title card-title activator grey-text text-darken-4"git>${result.title}<i class="material-icons right"></i></span>
            <p><a href="#" data-recipe="${result.id}">Link to Recipe</a></p>
          </div>
          <div class="card-reveal">
            <span class="recipe-title card-title grey-text text-darken-4">${result.title}<i class="material-icons right">X</i></span>
            <p class="currentRecipeIngredient">Missing Ingredients: <span class="missingIng">${result.missedIngredientCount}</span></p>
          </div>
        </div>
    </div>
     `  
    })
    recipeResults.innerHTML = generatedRecipe;
}

<<<<<<< HEAD
// Sidenav
=======
Sidenav
>>>>>>> 927fb3253db5f6067c340114ed8d1b480ad0960b
var instance = M.Sidenav.getInstance(elem);
instance.open();
instance.close();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
});
        
