class EntryAdapter {


    constructor(url) {
        this.baseUrl = url; 
    }

    submitEntry(e){
        e.preventDefault();

        const entryInfo = {
            title: e.target[0].value,
            content: e.target[1].value,
            Country: {
                name: e.target[2].value,
                area: e.target[3].value
            }, 
            
        }
        fetch(baseUrl + "entries", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entryInfo)
        })
            .then(r => r.json())
            .then(data => {
                let entry = new Entry(e.id, e.title, e.content, e.favorite, e.Country.name, e.Country.area, e.created_at);
                console.log(entry)
                // entry.putEntryOnDom();
            })
        }
    
        getAllEntries() {
            fetch(baseUrl + "entries")
                
                .then(r => r.json())
                .then(data => {
                    data.forEach(e => {
                        let entry = new Entry(e.title, e.content, e.favorite, e.country.name, e.country.area, e.created_at);
                        entry.putEntryOnDom();
                    })
                })
        }
        

}