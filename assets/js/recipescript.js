// Define all DOM elements here
var getReturnBtn = document.querySelector('#returnBtn')
const choiceRecipe = document.querySelector('#recipe-choice');
const myIngredients = document.querySelector('#ingredients');
const myTasteDescrip = document.querySelector('#taste-descrip');
const myNutrition = document.querySelector("#nutritionFacts");
const sourceUrl = document.querySelector('#sourceUrl'); 
const recipeCode = document.querySelector('#recipeCode'); 

var recipes = [];

recipeCode = JSON.parse(localStorage.getItem("recipeCode"))

// ?&apiKey=5f7f6407a3df426fb065f2211ab36e41


// Event Listeners Here

getReturnBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.history.go(-1); 
  console.log("Check home button");
  // close out html, return to main index 
})


// Image of recipe
data.image 

// Full ingredients by ID
data.ingredientWidget

// Taste description (i.e. sweet, spicy, bitter)
data.tasteWidget

// Nutrition facts by ID
data.nutritionWidget

// Link to view recipe source url 
// data.sourceUrl
function getSource(id) {
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?&apiKey=5f7f6407a3df426fb065f2211ab36e41",
        success: function(res){
            document.getElementById("sourceUrl").innerHTML=res.sourceUrl
            document.getElementbyId("sourceUrl").href=res.sourceUrl
        }
    }); 
}

