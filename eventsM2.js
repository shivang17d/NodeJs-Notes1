// CORE MODULE : EVENTS MODULE
const Emitter = require('events') // class

const myEmitter = new Emitter() // object

class Auth extends Emitter{  // inheritance
    register(username){
        console.log('Registered successfully...')
        // Emitter
        this.emit('registered',username)
    }
}
const auth = new Auth()  // object

//Listen

// Verify Email
auth.on('registered',(data) => {
    console.log(`Sending email to ${data}`)

})

// Welcome Email
auth.on('registered',(data) => {
    console.log(`Sending welcome email to ${data}`)

})

auth.register('Shivang')  // calling register function
