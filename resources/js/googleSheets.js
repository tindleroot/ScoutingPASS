function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAtLHJx9eUJYUMv5pchllIs3Z9OYCTgKphz-veiuUfaC0VmeGkqu04Xp4_-k7w_9twcg/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      let localData = JSON.parse(localStorage.getItem('scouting_pass_data'))

      if (localData == null) {
        
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
