function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLjzZfoJhkK1ANwky-eMH5KqP9Vpet9G-zfvgxffRpplVHNLx6PILCrrB9jF_98iZAbw/exec'
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
        let fd = new FormData()
        for (let [key, value] of dataPoint) {
          fd.append(key, value)
        }

        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
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
