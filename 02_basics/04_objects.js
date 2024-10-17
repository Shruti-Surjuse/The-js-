// singleton or constructore

const fullinfo=new Object()//singleton object
const info={}//non-singleton object 

fullinfo.name="shruti"
fullinfo.id="123"
fullinfo.email="shrutisurjuse40@gmail.com"
fullinfo.isloggedIn=false

// console.log(fullinfo);

const regular={// there are deep nested objects are allowed and accesseble
    email:"shruti@google.com",
    id:"173",
    fullname:{
        userfullname:{
            first:"shruti",
            last:"surjuse"
        }
    }

}

// console.log(regular);
// console.log(regular.fullname.userfullname.last);

//-----------merging two objects there are two ways assign and spread operator
const obj1={0:"a",1:"w",2:"r",3:"F"}
const obj2={3:"e",4:"t"}

// understand it like this 
const obj3=Object.assign(obj1,obj2);//Object.assign(obj1,obj2)// means sari value obj1 me chali jayegi 
// expected o/p={0:"a",1:"w",2:"r",3:"e",4:"t"}
const obj4=Object.assign({},obj1,obj2); // most used and in this there is a empty object and everything is stored into this only 
// console.log(obj3);

// console.log(obj3===obj1);
// expected o/p=true

const obj5={...obj1,...obj2}
// console.log(obj5);


// console.log(Object.keys(fullinfo));
// console.log(Object.values(fullinfo));
console.log(Object.entries(fullinfo));// it willgives the value in the array form

//when we are accessing any value from the data and that value somehow dont exit than we can ask it 
console.log(fullinfo.hasOwnProperty("islogged"));










