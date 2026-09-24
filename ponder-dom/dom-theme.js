// 1. Functions

// myFunctionName("DAN!!!!!");

// function myFunctionName(name) {
//     console.log(`This is your:  ${name} `)
//     let variable = "hello"
//     console.log(variable)
// }


// Call "Invoke" the funciton
// myFunctionName("Noah");

//2. Event listeners
    // retrieve something from the DOM
    // let select = document.querySelector("#theme-select")
    /* register an event listener (such as user interaction with the page) */

    // Event we are listening for, the function to call when that event occurs 

    //When your referencing a funciton to call later do not place parentheses
    // select.addEventListener("change", handleEvent); 
    
    // function handleEvent(event) {
    //     console.log(event);
    //     console.log(event.target.value);
    // }



// 3. If statements


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          