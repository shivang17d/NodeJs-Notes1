// CORE MODULE : path
const path = require('path')

console.log('')

console.log('1 : ')
//dirname
console.log(__filename)
console.log(__dirname)
console.log('Folder name : ',path.dirname(__filename))

console.log('2 : ')
// filename
console.log(__filename)
console.log('File name : ',path.basename(__filename))

console.log('3 : ')
//Extension name
console.log(__filename)
console.log('Ext name : ',path.extname(__filename))

console.log('4 a : ')
//Parse
console.log(__filename)
console.log('Parse : ',path.parse(__filename))
console.log('4 b : ')
console.log(__dirname)
console.log('Parse : ',path.parse(__dirname))

console.log('5 a : ')
// Join
console.log(__dirname)
console.log('Join : ',path.join(__dirname,'order','App.js'))
console.log('5 b : NOT CORRECT')
console.log(__filename)
console.log('Join : ',path.join(__filename,'order','App.js'))
