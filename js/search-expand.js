//Search expand
const searchListen = document.getElementById('search-secoundary');

searchListen.addEventListener('click', function(e) {
    searchListen.classList.add('round-button--search-button-open');
});

searchListen.addEventListener('keydown', function(e) {
    if (13 == e.keyCode) {
        searchListen.classList.remove('round-button--search-button-open');
        window.location.href = "/team6/etager/1-etage/";
    }
});

