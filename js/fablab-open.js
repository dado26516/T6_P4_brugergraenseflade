//overlay area expand
const clickableArea = document.getElementById('clickable-area');
const clickableAreaClose = document.getElementById('close');

clickableArea.addEventListener('click', function(e) {
    document.getElementById('overlay-lokale').style.display = "flex";
});

clickableAreaClose.addEventListener('click', function(e) {
    document.getElementById('overlay-lokale').style.display = "none";
});


//Bookmark
const bookmarkIcon = document.getElementById('bookmark-icon');
let isClicked = false;

bookmarkIcon.addEventListener('click', function(e) {
    if(isClicked === false) {
        bookmarkIcon.classList.add('bookmark-icon--selected');
        isClicked = true;
    }else {
        bookmarkIcon.classList.remove('bookmark-icon--selected');
        isClicked = false;
    }
});
