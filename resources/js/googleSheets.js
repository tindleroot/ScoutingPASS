function setUpGoogleSheets() {
    const form = document.querySelector('#scoutingForm')
    form.addEventListener('submit', e => doSubmit(e, document))
  }

  async function doSubmit(e, document) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz7bb0oFBiGF5HlRP30GdF2LbUfBcpSctTZjIV2Q7zfBo_GU_UEfN2affWtambWFoEz/exec'
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

    let rows = []
    for (const dataPoint in localData) {
      let fd = new FormData()
      for (const key in localData[dataPoint]) {
        fd.append(key, localData[dataPoint][key])
      }
      rows.push(fd)
      // totalSubmissions += 1
    }

    await fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: rows })
        .then(response => { 
          console.log(`SUCCESS: ${response.body}`)
          // delete localData[dataPoint]
          // for (const key of localData) {
          //   delete localData[key]
          // }
        })
        .catch(error => {
          console.log(`ERROR: ${error}`)
          // failedSubmissions += 1
        })

    alert(`Uploaded matches!`)
    localStorage.setItem('scouting_pass_data', JSON.stringify(localData))

    btn.disabled = false
    btn.innerHTML = "Send to Google Sheets"
  }
