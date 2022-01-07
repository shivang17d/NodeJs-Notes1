const name = function(username){
    console.log(`My name is ${username}.`)
}
const food = function(f1,f2){
    console.log(`I love to eat ${f1} and ${f2} very much.`)
}

/* 
If want to export both name and food function then below code won't work

module.exports = name
module.exports = food  // Only this will get exported

When we wan't to export more than one functions then we will use
object  
*/

// module.exports = {
//     n : name,
//     f : food
// }

// OR

// module.exports = {
//     name : name,
//     food : food
// }


// OR (Key and Value are same therefore.....)

module.exports = {
    name,
    food
}
