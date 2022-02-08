// Define all DOM elements here
var getReturnBtn = document.querySelector('#returnBtn')
var recipes = [];
var recipeCode = JSON.parse(localStorage.getItem("recipeCode"))
var ingList = document.querySelector('.ing-list')

let ingredients = []
// Event Listeners Here
// ?&apiKey=5f7f6407a3df426fb065f2211ab36e41

getReturnBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.history.go(-1); 
  console.log("Check home button");
  // close out html, return to main index 
})

function fetchRecipe() {
    recipeCode = JSON.parse(localStorage.getItem("recipeCode"))
    recipeURL = `https://api.spoonacular.com/recipes/${recipeCode}/information?includeNutrition=true&apiKey=5f7f6407a3df426fb065f2211ab36e41`
    console.log(recipeURL)
    fetch (recipeURL)
   .then((response) => response.json())
   .then((data) => {
       console.log(data);
       showRecipeData(data);
       showIngredients(data);
   })
}

function showRecipeData(data) {
    let {sourceUrl, summary, title, image} = data
    let calories = data.nutrition.nutrients[0].amount.toFixed(0)
    let fat = data.nutrition.nutrients[1].amount.toFixed(0)
    let sugar = data.nutrition.nutrients[5].amount.toFixed(0)
    let carbs = data.nutrition.nutrients[3].amount.toFixed(0)
    let protein = data.nutrition.nutrients[8].amount.toFixed(0)
    let servingWeight = data.nutrition.weightPerServing.amount.toFixed(0)

    document.querySelector('.recipe-name').innerText = title
    document.querySelector('.recipeImg').src = image
    document.querySelector('.summary').innerHTML = summary
    document.querySelector('.serving').innerText = servingWeight + 'g'
    document.querySelector('.calories').innerText = calories + ' cal'
    document.querySelector('.carbs').innerText = carbs + 'g'
    document.querySelector('.fat').innerText = fat + 'g'
    document.querySelector('.protein').innerText = protein + 'g'
    document.querySelector('.sugar').innerText = sugar + 'g'
    document.querySelector('.sourceUrl').href = sourceUrl
}

function showIngredients(data) {
    ingList.innerHTML = "";
    ingredients = data.extendedIngredients.map(item => item.name);
    console.log(ingredients)
    for (var i = 0; i < ingredients.length; i++) {
      var ingredient = ingredients[i]
      var amznLink = document.createElement("a");
      amznLink.href = `https://www.amazon.com/gp/search?ie=UTF8&tag=ingredient2me-20&linkCode=ur2&linkId=d1d269c3ab069e4c87b38e0412adacd3&camp=1789&creative=9325&index=grocery&keywords=${ingredient}`
      amznLink.target = "_blank"
      amznLink.classList.add('amz-link')
      amznLink.textContent = ingredient;
      ingList.appendChild(amznLink);
    }
  }

fetchRecipe()
// Image of recipe
// data.image 

// // Full ingredients by ID
// data.ingredientWidget

// // Taste description (i.e. sweet, spicy, bitter)
// data.tasteWidget

// // Nutrition facts by ID
// data.nutritionWidget

// Link to view recipe source url 
// data.sourceUrl
// function getSource(id) {
//     $.ajax({
//         url:"https://api.spoonacular.com/recipes/"+id+"/information?&apiKey=5f7f6407a3df426fb065f2211ab36e41",
//         success: function(res){
//             document.getElementById("sourceUrl").innerHTML=res.sourceUrl
//             document.getElementbyId("sourceUrl").href=res.sourceUrl
//         }
//     }); 
// }
