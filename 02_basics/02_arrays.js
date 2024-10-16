const num=[1,2,3]
const Num=[2,34]

// ---------push 
// num.push(Num)
// console.log(num);
// console.log(num[3][0]);
//we assume that it will merge the two arrays but it will take the second array as a singke element,problematic answer 

// -------------concat
// const all=num.concat(Num);//concat return the new array so we have to store it into another variavle
// console.log(all);// if we dont hold this value into the another variable then it will ony return the firs array 

// -------------spread
// const al=[...num,...Num]//it is more easy cause in concat we can only give one value 
// console.log(al);

const depth=[1,2,[3,4,5],[4,4,[5,6]]]//array.flat([depth])-->it is used to flaten the array and return new array with all sub arrays 
// const all=depth.flat(3)
// console.log(depth.flat(Infinity));
// console.log(all);

// when we have data at the time of data scrapping then some time data come into varoius format like html, json ,
// xml and plain text comman seperate format , images or the pdfs so in this situation we can ask with this methods 
console.log(Array.isArray('shruti'));//gives the boolean value 
console.log(Array.from("shruti"));//it convert the string into array
console.log(Array.from({name:"shruti"}));// it will return the empty array because it will got confused about which key or value should be converted into an array.

let score1=200
let score2=200
let score3=200
console.log(Array.of(score1,score2,score3));// when there are lots of elements and we have to convert them into an array so we can use this 






