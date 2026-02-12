const coding = ["js", "ruby", "java", "python", "cpp"]

//call back function does not require function name
// coding.forEach( function (item) {
//     console.log(item)
// }  )

// coding.forEach((item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme) // give reference of the function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        language: 'javascript', languagefilename: "js"
    },
    {
        language: 'java', languagefilename: "java"
    },
    {
        language: 'python', languagefilename: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.language)
})

// const values=coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(values);//undefined- foreach does not return any values

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newnums = mynums.filter((num) => { return num > 4 })
// // if you use curly bracket then we have to use return keyword to return the value
// const newnums = mynums.filter((num) => num > 4)

// console.log(newnums)

// const newNums=[]
// mynums.forEach((nums)=> {
//     if(nums>=4){
//         newNums.push(nums)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008 },
    { title: 'book three', genre: 'history', publish: 1999, edition: 2007 },
    { title: 'book four', genre: 'non-fiction', publish: 1989, edition: 2010 },
    { title: 'book five', genre: 'science', publish: 2009, edition: 2014 },
    { title: 'book six', genre: 'fiction', publish: 1987, edition: 2010 },
    { title: 'book seven', genre: 'history', publish: 1986, edition: 1996 },
    { title: 'book eight', genre: 'science', publish: 2011, edition: 2016 },

];

let userBooks = books.filter((bk) => bk.genre === "history")
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "history"
})

console.log(userBooks)

