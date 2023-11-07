// sends a request to https://api.giphy.com/v1/gifs/search?api_key=2bTx4lXM5rIXS1vBbQ6LN129JQRNgViL&q=&limit=25
const input = document.querySelector('#input-text');
const output = document.querySelector('#output');
let gifArray = [];
async function fetchGifs (input) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=2bTx4lXM5rIXS1vBbQ6LN129JQRNgViL&q=' + input + '&limit=10')
        .then(response => response.json())
        .then(gifData => {
            // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
            gifArray = [];
            gifData.data.forEach(gif => {
                gifArray.push(gif.images.original.url);
            })
            renderGifs()
        });
}

function renderGifs () {
    output.innerHTML = '';

    gifArray.forEach( (gif) => {
        const img = document.createElement("img");
        img.src = gif;
        output.appendChild(img);
    })

}

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
    fetchGifs(input.value);
})
