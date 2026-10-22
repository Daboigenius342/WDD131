// let courses = ["WDD131", "ITM220", "WDD231", "CSE212"]; 
// // arrays start with index 0
// console.log(courses[0]);
// console.log(courses [4]);


//  let coursesAndGrades = ["WDD131", 3.7, "ITM220", 4]; 

//  console.log(coursesAndGPA[1]);

 

//  console.log(courseAndGPA)

// console.log(courseAndGPA.courseName)
// let courseAndGPA = [
//    { courseName: "WDD131",
//     courseGPA: 3.7, 
//     professor: "Brother Warner",
//     assignmets: [
//         {assignmentName: "W01 Prove",
//             assigmentGrade: 89
//         }

//     ]
//    },
//    { courseName: "WDD131",
//     courseGPA: 4, 
//     professor: "Brother Warner"
//    }

// ]

// console.log(coursesAndGPA[1].assigments[0].assignmentName);


// for(let i = 0; i < coursesAndGPA.length; i++) {
//     console.log(coursesAndGPA[i].courseName);
//     console.log(coursesAndGPA[i].coursesGPA);
//     }

//     let body = document.querySelector('body');
//      coursesAndGPA.forEach(course => { 
//     let dynamicHTML =
//      <div>
//         <h1>${course.courseName}</h1>
//         <h2> ${course.courseGPA}</h2>
    

//     </div>
//     ;
//      }) 

    
    
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      }
    ];

    
let section = document.querySelector("section");
    movies.forEach(movie => {

        // Code for going through each movie and creating content for that movie
    

      let html = "";

students.forEach(student => {
    html += `
        <div>
            <p>${student.first} ${student.last}</p>
        </div>`;
});

    document.querySelector("#student-list").innerHTML = html;

    });


  
  
  /*<article class="movie">
      <h2>Spider-Man: Into the Spider-Verse</h2>
      <img src="https://wddbyui.github.io/wdd131/images/spiderman.png" alt="Miles Morales swinging through the city">
      <p><strong>Release Date:</strong> Dec 14, 2018</p>
      <p><strong>Recommended Age:</strong> 10+</p>
      <p><strong>Genre:</strong> Action/Adventure</p>
      <p><strong>Rating:</strong> <span>⭐⭐⭐⭐⭐</span></p>
      <p id='desc'>Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.</p>
    </article>
    <article class="movie">
      <h2>The Other Side of Heaven</h2>
      <img src="https://wddbyui.github.io/wdd131/images/heaven.png" alt="A young couple and missionaries in a row boat on the ocean">
      <p><strong>Release Date:</strong> December 14, 2001</p>
      <p><strong>Recommended Age:</strong> 10+</p>
      <p><strong>Genre:</strong> Drama/Religious</p>
      <p><strong>Rating:</strong> <span>⭐⭐⭐⭐</span></p>
      <p id='desc'>Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.</p>
</article>*/