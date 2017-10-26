function one (callback) {
  callback(120)
}

function two (value) {
  console.log(value)
}

function three (value) {
  console.log(value + value)
}

function four (value) {
  return value
}

function six (value) {
  let scoped = six
  console.log(scope)
}

// one(two)
// one(three)
// console.log(one(four)) 

// You're getting the return of one not four. It's always nested. 
// So functions run with callbacks always return undefined?  
// How the hell do you work with this?   

// let look = one(two)
// console.log(look)

// undefined again 

function five (callback) {
  let sum = Math.random() * 75
  callback(sum)
}

// five(two)
