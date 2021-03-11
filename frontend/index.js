const baseUrl = "http://localhost:3000/"
const countryAdapter = new CountryAdapter(baseUrl);
const entryAdapter = new EntryAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const form = document.getElementById("blogform")
// form.addEventListener("submit", submitEntry)
const container = document.getElementById("container")
const ul = document.getElementById("entry-area")
document.addEventListener("DOMContentLoaded",init);

function init() {
    entryAdapter.getAllEntries();
  }
  