// objects are can be created using 2 ways -object literals and constructure and another ways is singleton
// object literals
//keys are assume as strings like "name" we can even give it like 0
const sym=Symbol("key1") // this is how we can declear symbol
const user={
    name:"shruti",
    [sym]:"kwy1",
    "full name":"shhh",// can access using only [] brackets 
    age:21,
    location:"Mumbai",
    email:"shrutisurjuse40@gmail.com"
}
// access them (2 ways)
// console.log(user.email);
// console.log(user["email"]);// in this we have to give double codes to email so because keys are refers as strings , most prefered way , in this ways we have to give "" in every key
// console.log(user["full name"]);
// console.log(user["age"]);
// // console.log(typeof user.mysym);
// console.log(user[sym]);// in this we have use the symbol as the object proprty , create use in obj and while accessing dont use double codes 



// let sym1 = Symbol();
// let sym2 = Symbol('description');  // Optional description
// let sym3 = Symbol('description');

// console.log(sym1);  // Symbol()
// console.log(sym2);  // Symbol(description)
// console.log(sym2 === sym3);  // false (symbols are always unique)

// Using Symbols as Object Property Keys:
// const symKey = Symbol('key');
// const obj = {
//   [symKey]: 'This is a symbol property',
//   regularKey: 'This is a regular property'
// };

// console.log(obj[symKey]);  // Output: This is a symbol property
// console.log(obj.regularKey);  // Output: This is a regular property

// some basic opertaion 
// user.name="pritish"
// Object.freeze(user)// with the help if this we can freeze the object and prevent themfrom manipulation
// user.name="shrutiiiii"
// console.log(user);

//functions -->we can se them as avariables 
user.greeting=function(){
    console.log("hellow js user");
    
}

// console.log(user.greeting);//without prarantheris it will only give the reference of the function and the function is not executed 
console.log(user.greeting());

user.greeting1=function(){
    console.log(`hellow user ${this.name}`);
    
}

console.log(user.greeting1());
