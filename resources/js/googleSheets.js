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

      let localDataString = localStorage.getItem('scouting_pass_data')

      if (localDataString === null) {
        alert('Error!', 'Cannot fetch local data')
      }
      
      let localData = JSON.parse(localDataString)

      for (dataPoint in localData) {
        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: dataPoint })
        .then(response => { 
              console.log(response) })
        .catch(error => {
              alert('Error!', error.message)})
      }

      alert('Success!')

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
  }
