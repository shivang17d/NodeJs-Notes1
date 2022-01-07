// CORE MODULE : OS MODULE

const os = require('os')

console.log('Os type : ',os.type())
console.log('Os platform : ',os.platform())


console.log('CPU architecture : ',os.arch())
console.log('CPU details : ',os.cpus())

console.log('Free Memory : ',os.freemem()) //in bytes
console.log('Total Memory : ',os.totalmem())

console.log('Uptime : ',os.uptime())
