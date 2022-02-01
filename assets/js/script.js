const APIKEY = '5f7f6407a3df426fb065f2211ab36e41'


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
//     document.querySelector('.recipes').innerHTML = 
// ` <div class="col s4">
//     <div class="card r1">
//       <div class="card-image waves-effect waves-block waves-light">
//         <img class="activator" src="${image}">
//       </div>
//       <div class="card-content">
//         <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
//         <p><a href="#">${title}</a></p>
//       </div>
//       <div class="card-reveal">
//         <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
//         <p>${usedIng}</p>
//       </div>
//     </div>
// </div>
// `
}