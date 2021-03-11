class EntryAdapter {


    constructor(url) {
        this.baseUrl = url; 
    }

    submitEntry(e){
        e.preventDefault();
        const entryInfo = {
            title: e.target[0].value,
            content: e.target[1].value,
            start_date: e.target[2].value,
            end_date: e.target[3].value,
            countryName: e.target[4].value,
            countryArea: e.target[5].value,
            favorite: e.target[6].value
        }

     
        fetch(baseUrl + "entries", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entrytInfo)
        })
            .then(r => r.json())
            .then(data => {
                let entry = new Entry(e.id, e.title, e.content, e.favorite, e.start_date, e.end_date, e.country.name, e.country.area);
                entry.putEntryOnDom();
            })
        }
    
        getAllEntries() {
            fetch(baseUrl + "entries")
                
                .then(r => r.json())
                .then(data => {
                    data.forEach(e => {
                        let entry = new Entry(e.title, e.content, e.favorite, e.start_date, e.end_date, e.country.name, e.country.area);
                        entry.putEntryOnDom();
                    })
                })
        }
        

}