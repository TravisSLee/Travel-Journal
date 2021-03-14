const baseUrl = "http://localhost:3000/"
const countryAdapter = new CountryAdapter(baseUrl);
const entryAdapter = new EntryAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const form = document.getElementById("entryform")
form.addEventListener("submit", entryAdapter.submitEntry)
const container = document.getElementById("container")
const ul = document.getElementById("entry-area")
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", handleSort);
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);
document.addEventListener("DOMContentLoaded",init);


function init() {
    entryAdapter.getAllEntries();
  }

function updateFav(data) {
    let button = document.getElementById(`${data.id.toString()}`)
    if (data.favorite == true) {
      return button.children[0].innerText = " ✔"
    } else {
     return button.children[0].innerText = " x"
    }
}
checker = (obj) => {
  if (obj.favorite == false ){
      return " x"
   } else {
       return " ✔"
   }
}

function handleSort(e) {    
  
  let entries = Entry.all.slice();
  let sortedArray = entries.sort(function (a, b) {
      
      let nameA = a.title.toUpperCase(); 
      let nameB = b.title.toUpperCase(); 

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      
      return 0;
  });
 
  ul.innerHTML = ""
  
  
  sortedArray.forEach(e => {
      e.putEntryOnDom();
  })

}


function handleSearch(e) {
  let inputValue = document.getElementById("search").value;
  let filterdArray = Entry.all.filter(e => {
      return e.country.name.toLowerCase() === inputValue.toLowerCase()
  })

  ul.innerHTML = ""
  
  filterdArray.forEach(e => {
      e.putEntryOnDom();
  })

}
