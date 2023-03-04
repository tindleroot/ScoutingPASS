function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLjzZfoJhkK1ANwky-eMH5KqP9Vpet9G-zfvgxffRpplVHNLx6PILCrrB9jF_98iZAbw/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      // let fd = getData(false)
      // for (const [key, value] of fd) {
      //   console.log(`${key}: ${value}\n`);
      // }

      let localDataString = localStorage.getItem('scouting_pass_data')

      if (localDataString === null) {
        alert('Error!', 'Cannot fetch local data')
      }
      
      let localData = JSON.parse(localDataString)

      let totalSubmissions = 0
      let failedSubmissions = 0

      for (const dataPoint in localData) {
        let fd = new FormData()
        for (const key of localData[dataPoint]) {
          fd.append(key, localData[dataPoint][key])
        }
        for (const [key, value] of fd) {
          console.log(`${key}: ${value}\n`);
        }

        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
          console.log(`SUCCESS: ${response}`) })
        .catch(error => {
          console.log(`ERROR: ${response}`)
          failedSubmissions += 1
        })


        totalSubmissions += 1
      }

      alert('Success!', `Uploaded ${totalSubmissions - failedSubmissions}/${totalSubmissions} matches`)

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
  }
