class UI{
    static putNewEntryFormToDom() {
      formArea.innerHTML = ""
      formArea.innerHTML = `
        <div class="entry-form">
        <h2>Create An Entry Here</h2>
              <form id="entry-form">
                  <label> Title </label><br>
                  <input type="text" name="title" id="entry-title"><br>
                  <label> Content </label><br>
                  <textarea cols="25" name="mytextbox" rows="8" id="entry-content"></textarea><br>
                  <label> Country </label><br>
                  <input type="text" name="name" id="country-name"><br>
                  <label> Area </label><br>
                  <input type="text" name="are" id="country-area"><br>
                  <input type="submit" value="New Entry" id="entry-submit">
              </form>
        </div>
              `
        document.getElementById("entry-area").addEventListener("submit", entryAdapter.submitEntry);

    }
    static clearFields(){
      document.getElementById('entry-title').value = ''
      document.getElementById('entry-content').value = ''
      document.getElementById('country-name').value = ''
      document.getElementById('country-area').value = ''
    }
    
    static updateFav(data) {
        let button = document.getElementById(`${data.id.toString()}`)
        if (data.favorite == true) {
          return button.children[0].innerText = " ✔"
        } else {
         return button.children[0].innerText = " x"
        }
    }
    static checker = (obj) => {
      if (obj.favorite == false ){
          return " x"
       } else {
           return " ✔"
       }
    }
    
    static handleSort(e) {    
      
      let entries = Entry.all.slice();
      let sortedArray = entries.sort(function (a, b) {
          
          let nameA = a.title.toUpperCase(); 
          let nameB = b.title.toUpperCase(); 
    
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          
          return 0;
      });
     
      ul.innerHTML = ""
      
      sortedArray.forEach(e => {
          e.putEntryOnDom();
      })
    
    }
    
    static handleSearch(e) {
    
      let inputValue = document.getElementById("search").value
      ul.innerHTML = ""
      let filterdArray = Entry.all.filter(e => {
          return e.country.name.toLowerCase() === inputValue.toLowerCase()
      })
      filterdArray.forEach(e => {
          e.putEntryOnDom();
      })
    
    }
    
    static lookForFavs(e){
      let entries = Entry.all.slice();
      
      let favArr = []
      ul.innerHTML = ""
      entries.forEach(e => {
        if ( e.favorite === true){
          favArr.push(e)
        }
      })
    
      favArr.forEach(f => {
        f.putEntryOnDom();
      })
    }

    static clearFormArea(){
      formArea.innerHTML = ""
    }

    static renderUpdateForm(entry){
      this.clearFormArea();
      formArea.innerHTML = `
      <button id="cancelButton">Cancel Update</button>
      <div class="entry-form">
      <h2>Edit An Entry Here</h2>
            <form id="edit-entry-form">
                <label> Title </label><br>
                <input type="text" name="title" value="${entry.title}" id="entry-title"><br>
                <label> Content </label><br>
                <textarea cols="25" name="mytextbox" rows="8" value="${entry.content}" id="entry-content"></textarea><br>
                <label> Country </label><br>
                <input type="text" name="name" value="${entry.country.name}" id="country-name"><br>
                <label> Area </label><br>
                <input type="text" name="area" value="${entry.country.area}"  id="country-area"><br>
                <input type=hidden name="entry-id" value="${entry.id}"id="id"/>
                <input type="submit" value="Edit Entry" id="entry-submit">
            </form>
      </div>
            `
          
      document.getElementById("edit-entry-form").addEventListener("submit", entryAdapter.handleUpdate)
    }
  }