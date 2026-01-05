// singleton
// Object.create

// object literals

const mysym= Symbol("key1")

const jsuser = {
    name: "hitesh",
    "full name":"hitesh chaudhary",
    [mysym]:"mykey1",
    age: 18,
    location: 'Jaipur',
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLoginDay:["Monday","saturday"]

}


// console.log(jsuser.email);
// console.log(jsuser.full name]) can not access
console.log(jsuser["full name"])
console.log(jsuser["email"])
console.log(jsuser[mysym])

jsuser.email="hitesh@chatgpt.com"
console.log(jsuser);

// to lock the object
// Object.freeze(jsuser)
// jsuser.email="hitesh@microsoft.com"
// console.log(mysym);


jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`)
}


console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

