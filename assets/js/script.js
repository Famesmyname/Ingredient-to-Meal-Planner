// Define all DOM elements here
const testBtn = document.querySelector('.test-api')
const recipeResults = document.querySelector('.recipe-results')

//API INFO HERE
const APIKEY = '5f7f6407a3df426fb065f2211ab36e41'


testBtn.addEventListener('click', getRecipe)


function getRecipe() {
    var ingredient = document.querySelector('.ing1').innerText
    var recipeURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`
    + ingredient 
    + `&number=3&ignorePantry&apiKey=`
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
        <div class="col s3 m4">
        <div class="card r1">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="img activator" src="${result.image}" alt="A picture of generated recipe">
          </div>
          <div class="card-content">
            <span class="card card-title activator grey-text text-darken-4">${result.title}<i class="material-icons right"></i></span>
            <p><a href="#" data=${result.id}">Link to Recipe</a></p>
          </div>
          <div class="card-reveal center">
            <span class="r1card card-title grey-text text-darken-4">${result.title}<i class="material-icons right">X</i></span>
            <p class="currentRecipeIngredient">Missing Ingredients:<span class="missingIng">${result.missedIngredientCount}</span></p>
          </div>
        </div>
    </div>
     `  
    })
    recipeResults.innerHTML = generatedRecipe;
}
