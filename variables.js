// declare a variable
let age = 23;
 console.log(age);
age = 26;
 // constant variable can't be changed
 const name = "Brother Warner";
const username = "billybob";
 // This should not work due to the previous constant variable.
// name = "DR java";

// scope = where you can reference a variable

if(age == 22 ) {
    // this is a new scope
    console.log(username); 
    let favoriteColor = "Blue";
    let name = "Dr Java";
    console.log(name); 
}
console.log(name);

const favoriteColor = "Blue";
console.log(favoriteColor);
// grab our H1 from the DOM and color it blue with CSS.
document.querySelector("h2").style.color = "blue";
