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
                if (entry.id >= 0 ) {
                    entry.putEntryOnDom()
                }
                UI.clearFields();
            })
            .catch(function(error) {
                alert(error.message)
              }) 
            
        }
    
        getAllEntries() {
            fetch(baseUrl + "entries")
                
                .then(r => r.json())
                .then(data => {
                    data.forEach(e => {
                        let entry = new Entry(e.title, e.content, e.favorite, e.country.name, e.country.area, e.created_at, e.id);
                        if (entry.id != "undefined") {
                            entry.putEntryOnDom();
                        }
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
        
        handleUpdate(e){
            e.preventDefault();
            const entryInfo = {
                title: e.target[0].value,
                content: e.target[1].value,
                country: {
                    name: e.target[2].value,
                    area: e.target[3].value,
                }, 
            }
            
            let div = document.getElementById(e.target[4].value)
            let h2 = div.children[0]
            h2.innerText = e.target[0].value
            let p1 = div.children[1]
            p1.innerText = e.target[1].value
            let p2 = div.children[2]
            p2.innerText = e.target[2].value
            let p3 = div.children[3]
            p3.innerText = e.target[3].value

            UI.clearFormArea();
            UI.putNewEntryFormToDom();
            
            fetch(baseUrl + "entries" + `/${e.target[4].value}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entryInfo)
            })
            .catch(function(error) {
                alert(error.message)
              })
        }

        handleDestroy(e){
            fetch(baseUrl + "entries" + `/${this.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            let div = document.getElementById(`${this.id}`)
            div.remove();
            }
        
       
}