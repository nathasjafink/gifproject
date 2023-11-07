// sends a request to https://api.giphy.com/v1/gifs/search?api_key=2bTx4lXM5rIXS1vBbQ6LN129JQRNgViL&q=&limit=25
const input = document.querySelector('#input-text');
async function fetchGifs (input) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=2bTx4lXM5rIXS1vBbQ6LN129JQRNgViL&q=' + input + '&limit=25')
        .then(response => response.json())
        .then(gifData => {
            console.log(gifData);
            // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!




        });
}

const submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', () => {
        const output = document.querySelector('.output');

})
