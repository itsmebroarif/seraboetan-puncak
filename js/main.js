const scriptURL = 'https://script.google.com/macros/s/AKfycbxKl3D2Fhxn7SVIIs8DMgqWFMHyT3v6h0F6B1N5PSl5Yt2hf_cUucG4944kWnEp58S0Jw/exec'
const form = document.forms['seraboetan-page']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message, 404))
  })