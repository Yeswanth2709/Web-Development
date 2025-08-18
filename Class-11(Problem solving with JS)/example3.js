const students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 60 },
    {name : "Sumit" , score : 97},
    {name : "Mrinal" , score : 10},
  ];


// "A" (90-100)
// "B" (75-89)
// "C" (below 75)

// Return an object like:
// {
//   A: ["Alice" , 'Sumit'],
//   B: ["Bob"],
//   C: ["Charlie", "Mrinal"]
// }


function categorizeStudents(studentList) {
    // Write your code here
    const grades={
        A:[],
        B:[],
        C:[]
    }
    for(let i=0;i<studentList.length;i++){
        let student=studentList[i];
        if(student.score>=90){
            grades.A.push(student.name);
        }else if(student.score>=75){
            grades.B.push(student.name);
        }else{
            grades.C.push(student.name);
        }
    }
    return grades;
  }
  
  console.log(categorizeStudents(students));