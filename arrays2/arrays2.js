
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
};

    
let section = document.querySelector("section");
    movies.forEach(movie => {

        // Code for going through each movie and creating content for that movie
    

      let html = "";

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          
let body = document.querySelector("body");
    students.forEach(student => {

        let div = `
        <div>
        <p> ${student}</p>
        </div>`;
        body.innerHTML += div;
    });


    students.forEach(student => {
    html += `
        <div>
            <p>${student.first} ${student.last}</p>
        </div>`;
});

    document.querySelector("#student-list").innerHTML = html;

    });

    let body = document.querySelector("body");
let html = "";

words.forEach(word => {
    html += `
        <div>
            <p>${word}</p>
        </div>`;
});


