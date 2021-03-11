class Entry {
    constructor(title, content, favorite, start_date, end_date, countryName, countryArea){
        this.title = title
        this.content = content
        this.favorite = favorite
        this.start_date = start_date
        this.end_date = end_date
        this.countryName = countryName
        this.countryArea = countryArea
        Entry.all.push(this)
    }

    putEntryOnDom() {
  
        let div = document.createElement("div")
        let li = document.createElement("li")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")
        let p6 = ocument.createElement("p")
        // let button = document.createElement("button")
        // let span = document.createElement("span")
    
    
        p1.innerText = this.title
        p2.innerText = this.content
        p3.innerText = this.countryName
        p4.innerHTML = this.countryArea
        p5.innerHTML = this.start_date
        p6.innerHTML = this.end_date
        button.innerText = "Favorite"
        button.id = this.id
        // span.innerText = this.likes.toString()
        // button.append(span)
    
    
        li.append(p1, p2, p3, p4, p5, p6)
        div.append(li)
        ul.append(div)
    }
}