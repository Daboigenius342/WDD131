//1. Pull the elements we need from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');
// //2. 
gallery.addEventListener('click', function(event) {
    console.log(event.target.src)
    if(event.target.tagName ==='IMG') {
     dialogImage.src = event.target.src.replace("-sm", "-full");
     dialogImage.alt = event.target.alt;
     dialog.showModal();
   }
   

});


closeButton.addEventListener('click', () => {
   
    dialog.close();
} );

dialog.addEventListener('click', (event) => {
    if (event.target === dialog ) {
        dialog.close();
    }
});