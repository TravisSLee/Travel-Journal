class Entry {
    constructor(title, content, favorite, name, area, created_at, id){
        this.title = title
        this.content = content
        this.favorite = favorite
        this.Country = new Country(name, area)
        this.created_at = created_at
        this.id = id
        Entry.all.push(this)
    }

    static all = [] 

    putEntryOnDom() {
        let div = document.createElement("div")
        let li = document.createElement("li")
        let h2 = document.createElement("h2")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")
        let button = document.createElement("button")
        let span = document.createElement("span")
        //customize p tags later
        h2.innerText = this.title
        p2.innerText = this.content
        p3.innerText = this.Country.name
        p4.innerHTML = this.Country.area
        p5.innerHTML = this.created_at
        button.innerText = "Favorite"
        button.id = this.id
        span.innerHTML = checker(this)
        button.append(span)
        button.addEventListener("click", entryAdapter.handleFavorite)
       
        li.append(h2, p2, p3, p4, p5, button)
        div.append(li)
        ul.append(div)
    }
    //want the button to indicate that it is favorited or not
    //"✔"
    

}