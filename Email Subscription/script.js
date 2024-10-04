const scriptURL = 'https://script.google.com/macros/s/AKfycbxmX8K2A0HgKnPZayFBQty2VGDdzz4kwrS1sFj1Pd8rG5z2fj1ywfQ8DpyuDCapTDww/exec'
  const form = document.forms['submit-to-google-sheet'];

  const successMsg = document.getElementById("success-msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          successMsg.innerHTML = "Thank You for subscribing!!!"            
        setTimeout(() => {
            successMsg.innerHTML = ""            
        }, 3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })