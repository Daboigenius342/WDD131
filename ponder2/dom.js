

// let heading =  document.querySelector("h1");
// // let heading = document.querySelectorAll("h1")[1];
// console.log(heading);




// heading.textContent = "Changed the heading to something else";

// heading.style.color = "Red";
// heading.style.fontStyle = "bold";

// // document.getElementById("h1").style.color ="red";

// let image = document.querySelector("img");

// console.log(image.getAttribute("src"));

// image.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Columnar-jointed_porphyritic_phonolite_%28Eocene%2C_49_Ma%3B_Devils_Tower%2C_Wyoming%2C_USA%29_48.jpg/3840px-Columnar-jointed_porphyritic_phonolite_%28Eocene%2C_49_Ma%3B_Devils_Tower%2C_Wyoming%2C_USA%29_48.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail");


// let selectElem = document.getElementById('webdevlist');
// selectElem.addEventListener('change', function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })
                

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

