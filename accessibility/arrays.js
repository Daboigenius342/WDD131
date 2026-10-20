let courses = ["WDD131", "ITM220", "WDD231", "CSE212"]; 
// arrays start with index 0
console.log(courses[0]);
console.log(courses [4]);


 let coursesAndGrades = ["WDD131", 3.7, "ITM220", 4]; 

 console.log(coursesAndGPA[1]);

 

 console.log(courseAndGPA)

console.log(courseAndGPA.courseName)
let courseAndGPA = [
   { courseName: "WDD131",
    courseGPA: 3.7, 
    professor: "Brother Warner",
    assignmets: [
        {assignmentName: "W01 Prove",
            assigmentGrade: 89
        }

    ]
   },
   { courseName: "WDD131",
    courseGPA: 4, 
    professor: "Brother Warner"
   }

]

console.log(coursesAndGPA[1].assigments[0].assignmentName);


for(let i = 0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].coursesGPA);
    }

    let body = document.querySelector('body');
     coursesAndGPA.forEach(course => { 
    let dynamicHTML =
     <div>
        <h1>${course.courseName}</h1>
        <h2> ${course.courseGPA}</h2>
    

    </div>
    ;
     }) 

    