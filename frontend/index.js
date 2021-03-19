const baseUrl = "http://localhost:3000/"
const countryAdapter = new CountryAdapter(baseUrl);
const entryAdapter = new EntryAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const formArea = document.getElementById("form-area");
const container = document.getElementById("container");
const ul = document.getElementById("entry-area");
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", UI.handleSort);
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", UI.handleSearch);
const sortFavorite = document.getElementById("sortFavorite");
sortFavorite.addEventListener("click", UI.lookForFavs);
document.addEventListener("DOMContentLoaded",init);


function init() {
    entryAdapter.getAllEntries();
    UI.clearFormArea();
    UI.putNewEntryFormToDom();
  }



// to update resource I want to render a form with a new button