class Country {
    constructor(name, area){
        this.name = name
        this.area = area
        Country.all.push(this)
    }

}