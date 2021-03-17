const baseUrl = "http://localhost:3000/"
const countryAdapter = new CountryAdapter(baseUrl);
const entryAdapter = new EntryAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const formArea = document.getElementById("form-area")
const container = document.getElementById("container");
const ul = document.getElementById("entry-area");
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", handleSort);
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);
const sortFavorite = document.getElementById("sortFavorite");
sortFavorite.addEventListener("click", lookForFavs);
document.addEventListener("DOMContentLoaded",init);


function init() {
    entryAdapter.getAllEntries();
    putFormToDom();
  }

function putFormToDom() {
  formArea.innerHTML = `
    <div class="entry-form">
    <h2>Create An Entry Here</h2>
          <form id="entry-form">
              <label> Title </label><br>
              <input type="text" name="title" id="entry-title"><br>
              <label> Content </label><br>
              <textarea cols="25" name="mytextbox" rows="8" id="entry-content"></textarea><br>
              <label> Country </label><br>
              <input type="text" name="name" id="country-name"><br>
              <label> Area </label><br>
              <input type="text" name="are" id="country-area"><br>
              <input type="submit" value="New Entry" id="entry-submit">
          </form>
    </div>
          `
    document.getElementById("form-area").addEventListener("submit", entryAdapter.submitEntry);
}
function clearFields(){
  document.getElementById('entry-title').value = ''
  document.getElementById('entry-content').value = ''
  document.getElementById('country-name').value = ''
  document.getElementById('country-area').value = ''
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

  let inputValue = document.getElementById("search").value
  ul.innerHTML = ""
  let filterdArray = Entry.all.filter(e => {
      return e.country.name.toLowerCase() === inputValue.toLowerCase()
  })
  filterdArray.forEach(e => {
      e.putEntryOnDom();
  })

}

function lookForFavs(e){
  let entries = Entry.all.slice();
  
  let favArr = []
  ul.innerHTML = ""
  entries.forEach(e => {
    if ( e.favorite === true){
      favArr.push(e)
    }
  })

  favArr.forEach(f => {
    f.putEntryOnDom();
  })
}

// to update resource I want to render a form with a new button