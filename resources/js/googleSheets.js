function setUpGoogleSheets() {
    const form = document.querySelector('#scoutingForm')
    form.addEventListener('submit', e => doSubmit(e, document))
  }

  async function doSubmit(e, document) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLjzZfoJhkK1ANwky-eMH5KqP9Vpet9G-zfvgxffRpplVHNLx6PILCrrB9jF_98iZAbw/exec'
    const btn = document.querySelector('#submit')

    e.preventDefault()
    btn.disabled = true
    btn.innerHTML = "Sending..."

    let localDataString = localStorage.getItem('scouting_pass_data')

    if (localDataString === null) {
      alert('Error!', 'Cannot fetch local data')
    }
    
    let localData = JSON.parse(localDataString)

    let totalSubmissions = 0
    let failedSubmissions = 0

    for (const dataPoint in localData) {
      let fd = new FormData()
      for (const key in localData[dataPoint]) {
        fd.append(key, localData[dataPoint][key])
      }
      await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
          console.log(`SUCCESS: ${response}`)
          delete localData[dataPoint]
          return true
        })
        .catch(error => {
          console.log(`ERROR: ${error}`)
          return false
        })
      totalSubmissions += 1
      if (!callSuccess) {
        failedSubmissions += 1
      }
    }

    alert(`Uploaded ${totalSubmissions - failedSubmissions}/${totalSubmissions} matches`)
    localStorage.setItem('scouting_pass_data', JSON.stringify(localData))

    btn.disabled = false
    btn.innerHTML = "Send to Google Sheets"
  }
