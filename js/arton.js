const mainInput = document.getElementById('main-input');


document.getElementById('main-overlay').style.display = "none";

document.getElementById('page-input').addEventListener('click', function(e) {
    document.getElementById('main-overlay').style.display = "block";
});

mainInput.addEventListener('input', function(e) {
    
    let mainInputValue = mainInput.value;
    
    console.log(mainInputValue);
    
    if(mainInputValue == "Fablab") {
        document.getElementById('main-search').classList.add('dropdown__module--dropped');
        document.getElementById('main-dropdown').style.display = "flex";   
    }
    
    if(mainInputValue != "Fablab") {
        document.getElementById('main-search').classList.remove('dropdown__module--dropped');
        document.getElementById('main-dropdown').style.display = "none";   
    }
});