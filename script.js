var convertBtn = document.querySelector('.button');
var URLinput = document.querySelector('.input');
let serverURL = 'http://localhost:4000';

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(query) {
    window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}