// Define all DOM elements here
const testBtn = document.querySelector('.test-api')

//API INFO HERE
const APIKEY = '5f7f6407a3df426fb065f2211ab36e41'


testBtn.addEventListener('click', getRecipe)


function getRecipe() {
    var ingredient = document.querySelector('.ing1').innerText
    var recipeURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`
    + ingredient 
    + `&number=3&apiKey=`
    + APIKEY;

    // console.log(recipeURL)
    fetch(recipeURL)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => showRecipes(data))

}

function showRecipes(data) {
    let { title, image } = data[1]
    let usedIng = data[1].usedIngredients[0].name
    // console.log(usedIng)
    console.log(title)
    console.log(image)
    document.querySelector('.r1img').src = image;
    document.querySelector('.r1card-title').textContent = title;
    document.querySelector('.r1currentRecipeIngredient').textContent = usedIng;

}

// Sidenav
var instance = M.Sidenav.getInstance(elem);
instance.open();
instance.close();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
});