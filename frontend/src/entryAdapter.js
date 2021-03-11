class EntryAdapter {


    constructor(url) {
        this.baseUrl = url; 
    }

    submitEntry(e){
        e.preventDefault();
        const entryInfo = {
            title: e.target[0].value,
            content: e.target[2].value,
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
                let entry = new Entry(p.id);
                entry.putEntryOnDom();
            })
        }
    
        getAllEntries() {
            fetch(baseUrl + "entries")
                // the result from baseURL is NOT JSON it's a String
                .then(r => r.json())
                .then(data => {
                    data.forEach(p => {
                        let entry = new Entry(p.id, );
                        entry.putEntryOnDom();
                    })
                })
        }
        

}