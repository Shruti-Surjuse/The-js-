//arrays are resizable in js and can store all kind of data also start with zero indexed it male shallow copiea and the deep copies 
//shallow copies are copy which shares the same references and the deep copies are which do not share the same  type of references 
//arrays have prototyoe reference and also the lenght proprty
//arrays are objects 
//ctr+space=show all proprty

let arr=[2,4,3,3] //first way 
let arr1=new Array(3,4,5,6)//second way 
// console.log(arr1[3]);

// operations 
// arr.push(6)
// arr.pop()
// arr.unshift(8)//it add value in first index,usually don't use 
// arr.shift()
// arr.shift()//it delets the value from the first palce

// ----questionary proprty
// console.log(arr.includes(0));
// console.log(arr.indexOf(6));

// let newA=arr.join()// it will convert the array into string form 
// console.log(newA);
// console.log(typeof newA);
// console.log(arr);

//slice and splice  (the diffeerence between these two is slice does not change the original array and returns the new array
//  but splice does change ,it add,remove and replace the elem in the main array )
let a=[2,3,4,5,6]
console.log("slice",a.slice(0,3));
console.log(a);

console.log("splice",a.splice(0,3));
console.log(a);







