// const tinderuser= new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false;


// console.log(tinderuser)

const regularuser={
    email:" some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaudhary"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname)

const obj1= {1:"a",2:'b'}
const obj2= {3:"a",4:'b'}

// const obj3= { obj1,obj2}
// const obj3= Object.assign(obj1,obj2)
// const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

console.log(obj3);


const user=[
    {
        id:1,
        email:"hitesh@gmail.com"
    },
    {
        id:2,
        email:"hitesh@gmail.com"
    },
    {
        id:1,
        email:"hitesh@gmail.com"
    },
]

user[1].email
// console.log(user);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'));


// object destructure
const course= {
    coursename:"jsin hindi",
    price:"999",
    courseinstructor:"hitesh"
}

const {courseinstructor:instructor}=course
console.log(instructor)

// api
// api calling may return json format or array of objects 
// {
//     "name":"satya",
//     "coursename":"fun with science",
//     "fee"="free",
// }

// [
//     {},
//     {},
//     {}
// ]