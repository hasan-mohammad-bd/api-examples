//to get input value pressing the button
document.getElementById("error-message").style.display = "none"
const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);

    //clear data
    document.getElementById("error-message").style.display = "none";
    //here if search button is pressed without search anything there will show a message else show the result
    if(searchField.value == ""){
        //home work: please show an message here
    }
    else {
            //load data
    //to create dynamic url below code in necessary, below link must be in https format otherwise it will not work

    //here intentionally making mistake to catch error, the v14 was 1 
    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error))
    }


    

}
//here how the 404 picture is placed 
const displayError = error => {
    document.getElementById("error-message").style.display = "block";
}

//putting api to the right place
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    //option-1 to clear data(not very recommended)
    // searchResult.innerHTML = "";
    //option-2 to clear data(some times recommended) //if there is any text, it will be clear;
    searchResult.textContent = "";
    if(meals.length == 0){
        //home work: show no result found
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement("div");
        div.classList.add('col');
        div.innerHTML= `
            <div onClick="leadMealDetail('${meal.idMeal}')" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>`
        searchResult.appendChild(div);
    })

}

//getting the meals details
const leadMealDetail = mealId => {
    console.log(mealId);
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))

}

//to post in HTML 
const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById("meal-details");
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML =`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);

}