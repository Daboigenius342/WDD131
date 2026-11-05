// Javascript Objects

const aCourse = {
    name : "WDD131 Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2, 
    sections: [
        {
        sectionNum: 1, 
        roomNum: 'STC 353',
        enrolled: 26 , 
        days: 'TTh', 
        instructor: 'Bro T', 
    },
     {
        sectionNum: 2, 
        roomNum: 'STC 353',
        enrolled: 32 , 
        days: 'TTh', 
        instructor: 'Bro Helaman', 
    },
],
enrolled : function(sectionNumber) {
    console.log(this.name)
}

}

aCourse.enrolled(1);

console.log(aCourse.name)
console.log(aCourse.code)
console.log(aCourse.credits)


// event listener
document.querySelector("#enrollStudent").addEventListener("Click", (e) => {
    let sectionNum = document.querySelector("#sectionNumber").value.trim();
    aCourse.sections.forEach(section => {
        if(section.sectionNum == sectionNum) {
            section.enrolled += 1;
        }
        console.log(section.sectionNum);
        console.log(section.enrolled);
    });
   

});


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);
// when pressed , find the section num they entered
//increment enrollment of just that section by 1
// refresh the table
