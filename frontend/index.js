const baseUrl = "http://localhost:3000/"
const countryAdapter = new CountryAdapter(baseUrl);
const entryAdapter = new EntryAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const form = document.getElementById("blogform")
form.addEventListener("submit", handleSubmit)
const container = document.getElementById("container")
const ul = document.getElementById("post-area")
document.addEventListener("DOMContentLoaded",init);

function init() {
    getAllEntries();
  }
  