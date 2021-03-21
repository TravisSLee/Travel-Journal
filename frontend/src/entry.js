class Entry {
    constructor(title, content, favorite, name, area, created_at, id){
        this.title = title
        this.content = content
        this.favorite = favorite
        this.country = new Country(name, area)
        this.created_at = created_at
        this.id = id
        Entry.all.push(this)
    }

    static all = [] 

    putEntryOnDom() {
        //for each element write a function that sets id 
        let div = document.createElement("div")
        div.id = this.id
        let h2 = document.createElement("h2")
        let p1 = document.createElement("p")
        p1.setAttribute("id", "1");
        let p2 = document.createElement("p")
        p2.setAttribute("id", "2");
        let p3 = document.createElement("p")
        p3.setAttribute("id", "3");
        let updateButton = document.createElement("button")
        let deleteButton = document.createElement("button")
        let button = document.createElement("button")
        let span = document.createElement("span")
        //customize p tags later
        h2.innerText = this.title
        p1.innerText = this.content
        p2.innerText = `${this.country.area}, ${this.country.name}`
        p3.innerHTML = `Written on: ${this.created_at}`
        deleteButton.innerText = "Delete"
        deleteButton.id = this.id
        updateButton.innerText = "Update"
        updateButton.id = this.id
        button.innerText = "Favorite"
        button.id = this.id
        span.innerHTML = UI.checker(this)
        button.append(span)
        button.addEventListener("click", entryAdapter.handleFavorite)
        updateButton.addEventListener("click", UI.renderUpdate)
        deleteButton.addEventListener("click", entryAdapter.handleDestroy)
        div.append(h2, p1, p2, p3, button, updateButton, deleteButton)
        ul.append(div)
    }
}