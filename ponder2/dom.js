// attempted push per github issues

    

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener("change", () => {
    if (selectElem.value === "css") {
        document.body.style.fontStyle = "italic";
        document.body.style.color = "blue";
        document.body.style.fontFamily = "";
        document.body.style.fontWeight = "";
    
}
    if (selectElem.value ==="html") {
        document.body.style.fontStyle = "";
        document.body.style.fontWeight = "bold";
        document.body.style.color = "yellow";
         document.body.style.fontFamily = "";
          
    }
    if (selectElem.value === "js" ) {
        document.body.style.fontStyle = "italic";
        document.body.style.fontFamily = "Wingdings, Webdings, cursive";
        document.body.style.color = ""
           document.body.style.fontWeight = "";
     }

}) 

