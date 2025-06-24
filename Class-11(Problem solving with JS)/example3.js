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
    const ans={
        A:[],
        B:[],
        C:[]
    };
    for(let student of studentList){
        if(student.score>=90){
            ans.A.push(student.name);
        }else if(student.score>=75){
            ans.B.push(student.name);
        }else{
            ans.C.push(student.name);
        }
    }
    return ans;
  }
  
  console.log(categorizeStudents(students));