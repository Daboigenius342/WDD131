// attempted push per github issues

    

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener("change", () => {
    if (selectElem.value === "css") {
        document.body.style.fontStyle = "italic";
        document.body.style.color = "blue";
    }
    if (selectElem.value ==="html") {
        document.body.style.fontstyle = "bold"
        document.body.style.color = "yellow"    
    }
    if (selectElem.value === "js" ) {
        document.body.style.fontStyle = "italic"
        document.body.style.fontFamily = "Wingdings, Webdings, cursive"
     }

}) 

