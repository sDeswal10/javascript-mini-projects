const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const shibaInu = document.getElementById("shiba-inu");

const options = {
    async : true,
    scrossDomain: true,
    method: "GET",
    headers: {}
  };
  
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cshiba-inu&vs_currencies=inr",options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      bitcoin.innerHTML = (response.bitcoin.inr).toLocaleString("en-in");
      ethereum.innerHTML = (response.ethereum.inr).toLocaleString("en-in");
      shibaInu.innerHTML = (response["shiba-inu"].inr);
    })
    .catch(err => console.error(err));