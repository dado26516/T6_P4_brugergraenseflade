
document.getElementById('main-input').addEventListener('input', function(e) {
    document.getElementById('main-search').classList.add('dropdown__module--dropped');
    document.getElementById('main-dropdown').style.display = "flex";
});