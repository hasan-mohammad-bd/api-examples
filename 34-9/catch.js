const url = `
https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
`;
// console.log(url);
fetch(url)
  .then((res) => res.json())
  .then((data) => displaySearchResult(data.meals))
  .catch((error) => console.log(error));
