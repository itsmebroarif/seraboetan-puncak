const scriptURL = '<SCRIPT Web App Yang Tadi>'
  const form = document.forms['namaForm']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message, 404))
  })