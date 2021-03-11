class Entry {
    constructor(title, content, favorite, countryName, countryArea, created_at){
        this.title = title
        this.content = content
        this.favorite = favorite
        this.countryName = countryName
        this.countryArea = countryArea
        this.created_at = created_at
        Entry.all.push(this)
    }

    static all = [] 

    putEntryOnDom() {
  
        let div = document.createElement("div")
        let li = document.createElement("li")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")
        let button = document.createElement("button")
    
    
        p1.innerText = this.title
        p2.innerText = this.content
        debugger
        p3.innerText = this.countryName
        p4.innerHTML = this.countryArea
        p5.innerHTML = this.created_at
        button.innerText = "Favorite"
        button.id = this.id
        
    
    
        li.append(p1, p2, p3, p4, p5, button)
        div.append(li)
        ul.append(div)
    }
}