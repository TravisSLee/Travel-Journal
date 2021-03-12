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