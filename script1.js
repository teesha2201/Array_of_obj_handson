/*que 1 */
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
   
let Name =studentRecords.map((item)=>item.name); //explicitly 
console.log(Name)

/* other code */

let Names = [];
  console.log(typeof(Names))
  let arr = studentRecords.map(func);
  function func(x)
  {
      // Name+= x.name + " "  //it is string 
        Names.push(x.name)    // correct approach  
  }
 console.log(Names)

/* que 2 */

let minscore = studentRecords.map((check,i)=>{
 //   let obj={}
    if(check.marks>50)
    {
        return ;
       // console.log(check)
    }
    }) ;
    minscore=minscore.filter((item)=>item!==undefined)
   // console.log(minscore)

/* que 3 */

let min = studentRecords.map((check,i)=>{
// let obj={}
if(check.marks>50 && check.id>120)
{
  return (check)
}
}) ;
min= min.filter((item)=>item!==undefined)
console.log(min)

/* que 4 */   
let sum = 0
let ans=studentRecords.map((item)=>sum+=item.marks)
console.log(sum)
/* que 5 */

let filter = studentRecords.filter((item)=>(item.marks>50 ? item:null))        
filter=filter.map((item)=>item.name)    
console.log(filter)

/* que 6 */
                                   
let getsum = 0;
studentRecords.filter((item)=>(item.id>120?item:null)).map((item)=>getsum+=item.marks)
console.log(getsum)
/* que 7 */

let getadd=0
 
studentRecords.map((item)=>{
    if(item.marks<50)
    {
        item.marks+=15;
    }
    return item
}).map((item)=>{ if(item.marks>50)
   { getadd+=item.marks
  }
})

console.log(getadd)