// CORE MODULE : EVENTS MODULE
const Emitter = require('events') // class

const myEmitter = new Emitter() // object

//Event Listener::
myEmitter.on('somename',(data)=>{
    console.log(data)
})

// Event Emit::
myEmitter.emit('somename',{
    name : 'Shivang Gupta'
})

// or

// myEmitter.emit('somename',
//     'Shivang Gupta'
// )


// console.log(typeof({ name : 'Shivang Gupta'}))  //object
