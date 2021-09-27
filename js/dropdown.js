//Dropdown
const mainInput = document.getElementById('main-input');
const mainSearch = document.getElementById('main-search');
const mainDropdown = document.getElementById('main-dropdown');
const mainOverlay = document.getElementById('main-overlay');
                                           
mainOverlay.style.display = "none";
document.getElementById('page-input').addEventListener('click', function(e) {
    mainOverlay.style.display = "block";
});

mainInput.addEventListener('input', function(e) {
    
    let mainInputValue = mainInput.value;
    
    let test = mainInputValue.startsWith("F");
    console.log(test);
    
    
    if(mainInputValue.startsWith("F")) {
        mainSearch.classList.add('dropdown__module--dropped');
        mainDropdown.style.display = "flex";   
    } else {
        mainSearch.classList.remove('dropdown__module--dropped');
        mainDropdown.style.display = "none";   
    }
});