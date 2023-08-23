//const { resolve } = require("path");

console.log('a');
console.log('b');
function printc(){
   const promises = new Promise((resolve, reject) => {
    setTimeout(() =>resolve('c'), 3000)
    })
    return promises;
}
function printd(){
    const promises = new Promise((resolve, reject) => {
    setTimeout(() => resolve('d'), 0)
    })
    return promises;
}
function printe(){
    console.log('e');
}
async function printseriealize(){
    console.log(await printc());
    console.log(await printd());
    printe();
}
printseriealize();