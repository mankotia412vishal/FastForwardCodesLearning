const names=require('./1-module')
const sayHi=require('./2-module')
const {b,shubham}=require('./1-module')

sayHi(names.b)
sayHi(names.c)
sayHi(b)