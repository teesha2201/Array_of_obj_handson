/*que 1 */

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
     //     We are interested in retrieving only the students' names; all the //names should be in caps :-
         //['JOHN', 'BABA', 'YAGA', 'WICK']
//......first code...............
// let Name = [];
//  console.log(typeof(Name))
//  let arr = studentRecords.map(func);
//  function func(x)
//  {
//       Name+= x.name + " "  //it is string
   //      Name.push(x.name)     correct approach
     
  
//  }
//  console.log(Name)
//second code..........
let Name =[];
for (let i of studentRecords)
{
   Name.push(...Object.values(i))
}
console.log(Name)
// let x= Name.map((e,i)=>
// {
//     if(typeof(Name[i])== Number)
//         continue
//     else    
//     return x+=Name
// })
// console.log(x)

/*que 8 */
//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
//let arr=[];
// function student(name, sclass, rollno)
//   {
//      this.name = name;
//      this.sclass = sclass;
//      this.rollno = rollno;
//   }
// let obj1 = new student('Teesha', 12,121) 
// let obj2 = new student('siya', 11,101)
// let obj3 = new student('Era',1,10)

// arr=[obj1,obj2,obj3]

// console.log((arr))
