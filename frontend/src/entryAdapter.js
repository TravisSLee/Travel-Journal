class EntryAdapter {

    constructor(url) {
        this.baseUrl = url; 
    }

    submitEntry(e){
        e.preventDefault();
        
        const entryInfo = {
            title: e.target[0].value,
            content: e.target[1].value,
            country: {
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
                let entry = new Entry(data.title, data.content, data.favorite, data.country.name, data.country.area, data.created_at, data.id);
                entry.putEntryOnDom();
                //clear form function
            })
        }
    
        getAllEntries() {
            fetch(baseUrl + "entries")
                
                .then(r => r.json())
                .then(data => {
                    data.forEach(e => {
                        let entry = new Entry(e.title, e.content, e.favorite, e.country.name, e.country.area, e.created_at, e.id);
                        entry.putEntryOnDom();
                    })
                })
        }
        
        handleFavorite(e) {
            let fav = (e) => {
                
                if ( e.target.innerText ==  "Favorite x"){
                    return true
                } else {
                    return false
                }
            }
            fetch(baseUrl + "entries" + `/${this.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({favorite: fav(e)})
            })
        
                .then(r => r.json())
                .then(data => updateFav(data))
        }
        
    
       
}