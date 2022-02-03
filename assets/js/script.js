// Define all DOM elements here
const testBtn = document.querySelector('.test-api')
const recipeResults = document.querySelector('.recipe-results')
const recipeNumber = document.querySelector('#recipe-number')


//API INFO HERE
const APIKEY = '5f7f6407a3df426fb065f2211ab36e41'


testBtn.addEventListener('click', getRecipe)

function getRecipe() {
    var ingredient = document.querySelector('.ing1').innerText
    var recipeURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`
    + ingredient 
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
        <div class="col s3 s6">
        <div class="recipe-card card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="img activator" src="${result.image}" alt="A picture of generated recipe">
          </div>
          <div class="card-content">
            <span class="card card-title activator grey-text text-darken-4">${result.title}<i class="material-icons right"></i></span>
            <p><a href="#" data-recipe="${result.id}">Link to Recipe</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${result.title}<i class="material-icons right">X</i></span>
            <p class="currentRecipeIngredient">Missing Ingredients: <span class="missingIng">${result.missedIngredientCount}</span></p>
          </div>
        </div>
    </div>
     `  
    })
    recipeResults.innerHTML = generatedRecipe;
}

        