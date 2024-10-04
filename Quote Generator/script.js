const quoteBtn = document.querySelector("#new-quote");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const instaBtn = document.querySelector("#insta");
const quoteUrl = "https://api.quotable.io/random"


async function generateQuote(quoteUrl){
    const response = await fetch(quoteUrl);
    const data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
generateQuote()

quoteBtn.addEventListener("click", ()=>{
    generateQuote()
})