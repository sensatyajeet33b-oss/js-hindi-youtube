const myobject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobject) {
    console.log(myobject[key])
    
}

const programming=["js","rby","py","java","cpp"]// here keys are the numbers starting from 0
for (const key in programming) {
    console.log(programming[key]);
}

const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("Fr","FRANCE")
// maps are not iterable
for (const key in map) {
    console.log(key);
}
