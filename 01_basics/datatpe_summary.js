/*types of fatype in the js 
How data is store and how data can be accessed from the memory in the basis of this datatypes are two types
.primitives(call by value ) and non-primitives (call by reference)
Primitive datatypes ->.7 types - String,Number,Boolean,BigInt,Symbol,null,undefined
when we have to copy the value it doesn't share the actuall value it will share its copy and changes made in those copy not in the actual value

we don't have to define the type of varibles in the js , in symbols if we pass the same string it will return the differnt datatype each type  
const Id=Symbol("123")
const anotherId=Symbol("123")
console.log(Id===anotherId);// false 

const bigInt=2345678902456789n , n indicates that it is bigInt


JavaScript is dynamic or the static type 
ans->

// .Reference type (non-primitive)-> The reference of the memory alloate you 
// types-> Arrays ,Object,Functions (usually its type is object and function's type os function object or function )
const fruits=["apple","orange","banana"]

const obj={
    name:"shruti",
    age:22
}

const fun=function(){
    console.log("h");
    
}
const bigInt=2345678902456789n 

// we can know the type of any variable by typeof 
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object


console.log(typeof bigInt);// tally karna hai 
*/

// ================================
// stack and heap memory 
// stack is for primitive datatype and heap for the non-primitive 
//in stack it gives the copy of the original value and make changes into the copied value 
let nam="shruti"
let name2=nam
 name2="sss"
 console.log(nam);
 console.log(name2);

//  in heap memory it always pass the reference of the original value and if we make changes into them it also change the original vlaue
let obj={
    name:"shruti",
    age:21
}

let obj1=obj
obj1.age=23

console.log(obj);
console.log(obj1);



















