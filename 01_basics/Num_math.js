// const num =400// in this the js automatically detect that it is a number and we don't have to particularly write it  
// console.log(num);

const num1=new Number(200)// this is another way where we can specifiaclly write that it is number 
// console.log(num1);
// console.log(num1.toString().length);
// console.log(num1.toFixed(2));// it will give the fix value after the decimal
// console.log(num1.toPrecision(3));//it give the presice value what we passed 

const n=1000000
// console.log(n.toLocaleString('e-IN'));// it make easier to count the 0's e-In for converting them in indian pattern 
// there are lot of method of number go to console and Type Number(Number.)

// ====================== Math
// console.log(Math);//it is object itself
// console.log(Math.abs(-4)); //it wil only convert the negative value to poditive 
// console.log(Math.round(4.4)); // it will give 4 only if decimal value is more than 5 than it will consider 4.6 as 5 
// console.log(Math.ceil(4.5)); // if value is bigger than 4 even if it is in points it will consider it 5 
// console.log(Math.floor(4.5)); // it will consider it 4 only 
// console.log(Math.min(4,5,6,1,2));
// console.log(Math.max(4,5,6,8));
// console.log((Math.random()*10)+1);//random gives the value between 0 and 1 , and in some cases we want to avoid 0.0 value so for that add 1 

//when we have to define min and max 
const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min); //added min so than we can  have the value always graer than 10 







