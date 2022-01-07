// CORE MODULE : File Sysytem Module
const fs = require('fs')
const path = require('path')


console.log("MAKE A DIRECTORY : ")
//Note: You may also omit the slash(/) in '/test'
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if (err) {
        //This will get executed when the 'test' folder already exists
        console.log('Something went wrong...')
        console.log(err)
        return
    }
    console.log('Folder created...')
})


// // Caution : First Create 'demo' folder and then run
// //Note : Below code overwrite the content in the demo.txt file
// console.log("CREATE A FILE : type 1 : overwrite ")
// fs.writeFile(path.join(__dirname, 'demo', 'demo.txt'), 'Hello Node', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('File created...')
// })


// console.log("CREATE A FILE : type 2 : append ")
// fs.writeFile(path.join(__dirname, 'demo', 'demo.txt'), 'Hello Node \n', (err) => {
//     if (err) {
//         throw err
//     }
//     fs.appendFile(path.join(__dirname, 'demo', 'demo.txt'), 'More Data', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('More Data added')
//     })
//     console.log('File created...')
// })


// //Read a File //Type 1
// fs.readFile(path.join(__dirname,'demo','demo.txt'),(err,data) =>{
//     if (err) {
//         throw err
//     }
//     //Below code is done to avoid buffer
//     const content = Buffer.from(data)
//     console.log(content.toString())
// })


// //Read a File //Type 1
// fs.readFile(path.join(__dirname,'demo','demo.txt'),'utf-8',(err,data) =>{
//     if (err) {
//         throw err
//     }
//     console.log(data)   
// })
