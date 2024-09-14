// let date=new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// if we want a specific date than we can use this syntax
// let newDate=new Date(2024,0,9)
// console.log(newDate.toDateString());

// let newDate=new Date(2024,0,9,5,6)
// console.log(newDate.toLocaleDateString());

// let newDate=new Date("2023-01-2")// format of YY/mm/dd
// console.log(newDate.toLocaleDateString());

// let newDate=new Date("01-")// format of MM/DD/yy
// console.log(newDate.toLocaleDateString());

// -----Timestamp(always do comapresion in milisecond )
// let timestamp=Date.now()//todays date in milisecond
// console.log(timestamp);
// console.log(newDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


let b=newDate.toLocaleString('default',{//we can specify the more proprtirs here it will take only objects 
    weekday:"long"
})

console.log(newDate);
console.log(b);



















