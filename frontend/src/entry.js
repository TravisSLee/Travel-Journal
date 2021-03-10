class Entry {
    constructor(title, content, favorite, start_date, end_date, name, area){
        this.title = title
        this.content = content
        this.favorite = favorite
        this.start_date = start_date
        this.end_date = end_date
        this.country = new Country(name, area)
    }
}