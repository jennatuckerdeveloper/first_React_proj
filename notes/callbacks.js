console.log('callbacks working')

let a = function (callback, initial) {
  const num = initial + 5
  return callback(num) // you are actually stepping over the return here 
}

let b = function(prop) {
  console.log(prop)
  const num2 = 7
  return prop * num2
}

console.log(a(b, 3))
console.log('with no return in first function: ')
console.log('You will get MORE lines in the console.')

let c = function (callback, initial) {
  const num = initial + 5
  console.log(callback(num)) // you still get num passed, and you get a return of undefined
}

let d = function(prop) {
  console.log(prop)
  const num2 = 7
  return prop * num2
}

console.log(c(d, 3))

console.log('with no return in first OR second function: ')
console.log('You will get yet another undefined added to the console.')

let e = function (callback, initial) {
  const num = initial + 5
  console.log(callback(num)) // you still get num passed, and you get a return of undefined
}

let f = function(prop) {
  console.log(prop)
  const num2 = 7
  console.log(prop * num2)
}

console.log(e(f, 3))

let g = function(num, callback) {
  let num2 = num + 3
  callback(num2)
}

let h = function(prop) {
  console.log(prop * 3)
}

g(1, h)

let i = function (num, callback) {
  g(5, h)
}
console.log('Break')
i(() => console.log)
